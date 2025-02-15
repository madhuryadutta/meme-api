## 🚨 **Notice: Project Discontinued** 🚨  
This project is no longer maintained. The **Meme-API** was designed to serve memes from the [Huge Meme Pack](https://archive.org/details/HugeMemePack), but active development and support have been discontinued.  
Feel free to fork the repository or modify it for personal use.  

---

## **Meme-API** 🎭  
A FastAPI-powered meme service that serves memes from the [Huge Meme Pack](https://archive.org/details/HugeMemePack). Supports local deployment and Dockerized setup for seamless access.  

### **Usage**  
```bash
pip install -r requirements.txt  
uvicorn app.main:app --proxy-headers --reload  
```

### **Docker Deployment**  
```bash
docker build -t meme-api .  
docker run -d --name meme-api -p 80:80 meme-api  
```

---
