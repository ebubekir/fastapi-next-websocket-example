from core import app

from .test import router as test_router

app.include_router(test_router, prefix="/test")