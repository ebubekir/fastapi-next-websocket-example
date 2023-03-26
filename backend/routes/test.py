import time

from fastapi import APIRouter
from fastapi import WebSocket


router = APIRouter()

async def step1():
    time.sleep(3)
    return True


async def step2():
    time.sleep(2)
    return True


async def step3():
    time.sleep(3)
    return True


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    await websocket.send_json(
        {
            "current_step": 1,
            "completed": [],
            "message": "Setup Started",
            "continue": True,
        }
    )
    while True:
        # data = await websocket.receive_text()
        await step1()
        await websocket.send_json(
            {
                "current_step": 2,
                "completed": [1],
                "message": "Step 1 completed.",
                "continue": True,
            }
        )

        await step2()
        await websocket.send_json(
            {
                "current_step": 3,
                "completed": [1, 2],
                "message": "Step 2 completed.",
                "continue": True,
            }
        )

        await step3()
        await websocket.send_json(
            {
                "current_step": 3,
                "completed": [1, 2, 3],
                "message": "Step completed.",
                "continue": False,
            }
        )

        await websocket.close()
        break
