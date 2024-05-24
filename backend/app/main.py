import os
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

app = FastAPI()

# CORS設定を追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 全てのオリジンを許可する場合
    allow_credentials=True,
    allow_methods=["*"],  # 全てのHTTPメソッドを許可する場合
    allow_headers=["*"],  # 全てのヘッダを許可する場合
)

# 環境変数からAPIキーを取得
openai_api_key = os.environ.get("OPENAI_API_KEY")
if not openai_api_key:
    raise Exception("OPENAI_API_KEY is not set in the environment variables")

# OpenAIクライアントの初期化
openai_client = OpenAI(api_key=openai_api_key)

class ChatPrompt(BaseModel):
    prompt: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/generate")
async def generate_completion(prompt: ChatPrompt):
    try:
        response = openai_client.chat.completions.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt.prompt}
            ]
        )
        return {"message": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
