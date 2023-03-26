import uvicorn
from fastapi import FastAPI
from routes import *
from core import app

if __name__ == '__main__':
    uvicorn.run(app)
