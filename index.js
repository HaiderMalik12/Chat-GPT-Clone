import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant, answer any question to the best of your ability." }],
        model: "gpt-3.5-turbo",
    }, {
        role: 'user',
        content: 'Hi! Can you tell me what is the best way to learn how to code?',
    });

    console.log(completion.choices[0].message.content);
}

main();