'use strict'
const argv = process.argv.slice(2)
import dotenv from 'dotenv-safe'
import { ChatGPTAPI } from 'chatgpt'
dotenv.config()

async function askQuestion(){
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })
  const res = await api.sendMessage(argv[0])
  console.log(JSON.stringify({
    items: [{
      title: argv[0],
      subtitle: res.text,
      valid: false
    }]
  }))
}
askQuestion()