from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from app.config import settings
from app.database import get_db
from app.schemas import ContactRead
from models.contact import ContactMessage

router = APIRouter(tags=["admin"])


def require_admin(x_admin_token: str = Header(default="")) -> None:
    if not x_admin_token or x_admin_token != settings.admin_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin token",
        )


@router.get("/messages", response_model=list[ContactRead], dependencies=[Depends(require_admin)])
def list_messages(db: Session = Depends(get_db)) -> list[ContactMessage]:
    return list(db.scalars(select(ContactMessage).order_by(desc(ContactMessage.created_at))).all())


@router.patch("/messages/{message_id}/read", response_model=ContactRead, dependencies=[Depends(require_admin)])
def mark_message_read(message_id: int, db: Session = Depends(get_db)) -> ContactMessage:
    message = db.get(ContactMessage, message_id)
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found")

    message.is_read = True
    db.commit()
    db.refresh(message)
    return message

