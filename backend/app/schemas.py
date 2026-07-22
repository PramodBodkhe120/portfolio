from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class Project(BaseModel):
    title: str
    summary: str
    impact: str
    stack: list[str]
    url: str


class ExperienceItem(BaseModel):
    role: str
    company: str
    period: str
    summary: str
    highlights: list[str]


class SkillGroup(BaseModel):
    title: str
    skills: list[str]


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    message: str = Field(min_length=10, max_length=3000)


class ContactRead(ContactCreate):
    id: int
    created_at: datetime
    is_read: bool

    model_config = {"from_attributes": True}

