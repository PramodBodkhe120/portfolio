from secrets import compare_digest

from app.config import settings


def is_valid_admin_token(token: str) -> bool:
    return compare_digest(token, settings.admin_token)

