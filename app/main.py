from typing import Union

from fastapi import FastAPI ,Request
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

import os
import random
from dotenv import load_dotenv

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

source_list=[]

def load_data():
    global source_list
    path = "./local/meme"
    source_list = os.listdir(path)
    print('Dataset Loaded')

load_data()
load_dotenv()

CDN=os.environ['APP_URL_ENV']

app.mount("/static", StaticFiles(directory="local/meme"), name="static")

@app.get("/")
def read_root(request: Request):
    client_host = request.client.host
    return {"random_meme":  'http://' + str(CDN)+'/static/'+random.choice(source_list)}

