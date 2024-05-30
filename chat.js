import { openai } from "./openai.js";
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const newMessage = async (history, message) => {
    const results = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [...history, message],
        temperature: 0 //2 means make it more creative , 0 means don't lie to me
    })
    return results.choices[0].message
}

const formatMessage = (userInput) => ({
    role: 'user',
    content: userInput
})

const chat = () => {
    const history = [
        {
            role: 'system',
            content: 'You are an AI Assistant, Answer questions or else'
        }
    ]

    const start = () => {
        rl.question('You: ', async (userInput) => {
            if (userInput.toLowerCase() === 'exit') {
                rl.close()
                return;
            }
            const message = formatMessage(userInput)
            const response = await newMessage(history, message);

            history.push(message, response)
            console.log(`\n\nAI: ${response.content}`)
            start()
        })
    }

    start()
}
console.log("Chatbot initialized. Type 'exit' to end the chat")
chat();

// Model is doing for us: use ai to convert text to numbers