from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.admin import router as admin_router
from api.routes import router as public_router
from app.config import settings
from app.database import Base, engine


def create_app() -> FastAPI:
    application = FastAPI(
        title="Portfolio API",
        version="0.1.0",
        description="Backend API for the full-stack portfolio.",
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @application.on_event("startup")
    def on_startup() -> None:
        Base.metadata.create_all(bind=engine)

    @application.get("/health", tags=["system"])
    def health_check() -> dict[str, str]:
        return {"status": "ok"}

    application.include_router(public_router, prefix="/api")
    application.include_router(admin_router, prefix="/api/admin")
    return application

