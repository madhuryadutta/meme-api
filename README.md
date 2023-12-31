# meme-api



Meme Source
https://archive.org/details/HugeMemePack


### How to Use:
pip install -r requirements.txt
uvicorn app.main:app --proxy-headers --reload 

## Docker (Deploy)
docker build -t meme-api .
docker run -d --name meme-api -p 80:80 meme-api
