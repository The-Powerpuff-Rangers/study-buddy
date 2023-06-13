from bot import ChatBot
import json


def main(req, res):

    

    try:
        # message = json.load(str(req.payload))['message']

        res.json({
            "message": req.payload
        })

        api_key = req.variables.get('OPENAI_API_KEY')
        bot = ChatBot(model="gpt-3.5-turbo-0301", api_key=api_key)
    except Exception as e:
        return res.json({
            "message": "Error: " + str(e)
        })

    return res.json({
        "message": bot.chat(user_input=message),
    })
