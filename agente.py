import asyncio
from google.antigravity import Agent, LocalOpenAIAgentConfig

config = LocalOpenAIAgentConfig(
    base_url="http://localhost:11434/v1",
    model="deepseek-r1:8b",
    env={"OPENAI_API_KEY": "ollama"}
)

async def rodar_agente():
    async with Agent(config) as agent:
        response = await agent.chat("Crie uma rota HTTP simples usando Express no Node.js.")
        async for token in response:
            print(token, end="", flush=True)
        print()

if __name__ == "__main__":
    asyncio.run(rodar_agente())
