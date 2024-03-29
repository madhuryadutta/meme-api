from typing import Union

from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

import os
import random
from dotenv import load_dotenv

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


source_list = []


def load_data():
    global source_list
    path = "./local/meme"
    source_list = os.listdir(path)
    print("Dataset Loaded")


load_data()
load_dotenv()

CDN = os.environ["APP_URL_ENV"]

app.mount("/static", StaticFiles(directory="local/meme"), name="static")


@app.get("/")
def read_root(request: Request):
    client_host = request.client.host
    return {
        "random_meme": "https://" + str(CDN) + "/static/" + random.choice(source_list)
    }


@app.get("/v")
def read_version(request: Request):
    client_host = request.client.host
    return {"version": "0.0.1", "release_date": "03/03/2024"}


@app.get("/whoami")
def read_client(request: Request):
    client_host = request.client.host
    return {"client_ip": client_host}


@app.get("/q/{query}")
def read_item(query: str):
    i = 0
    result = {}
    for x in source_list:
        if query in x:
            i = i + 1
            url_meme = "http://" + str(CDN) + "/static/" + x
            result.update({i: url_meme})
    if i == 0:
        output = "No Result found"
    else:
        output = result
    return {"random_meme": output}
