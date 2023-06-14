import json
import openai


class ChatBot:
    def __init__(self, model, api_key, max_tokens=200, temperature=0.9):
        self.model = model
        self.max_tokens = max_tokens
        self.temperature = temperature
        openai.api_key = api_key

    def chat(self, user_input):
        response = openai.ChatCompletion.create(
            model=self.model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant for teaching engineering students."},
                {"role": "user", "content": f"{user_input}"},
            ],
            max_tokens=self.max_tokens,
            temperature=self.temperature,
        )
        return response["choices"][0]["message"]

def main(req, res):
    try:
        message = json.loads(str(req.payload))['message']

        api_key = req.variables.get('OPENAI_API_KEY')
        bot = ChatBot(model="gpt-3.5-turbo-0301", api_key=api_key)
    except Exception as e:
        return res.json({
            "message": "Error: " + str(e)
        })

    return res.json({
        "message": bot.chat(user_input=message),
    })
