from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas import ContactCreate, ExperienceItem, Project, SkillGroup
from app.seed import experience, profile, projects, skills
from models.contact import ContactMessage

router = APIRouter(tags=["public"])


@router.get("/profile")
def get_profile() -> dict[str, str]:
    return profile


@router.get("/projects", response_model=list[Project])
def get_projects() -> list[dict[str, object]]:
    return projects


@router.get("/experience", response_model=list[ExperienceItem])
def get_experience() -> list[dict[str, object]]:
    return experience


@router.get("/skills", response_model=list[SkillGroup])
def get_skills() -> list[dict[str, object]]:
    return skills


@router.post("/contact", status_code=201)
def create_contact_message(payload: ContactCreate, db: Session = Depends(get_db)) -> dict[str, str]:
    message = ContactMessage(**payload.model_dump())
    db.add(message)
    db.commit()
    return {"status": "received"}

