'use strict'
const argv = process.argv.slice(2)
import { ChatGPTAPI } from 'chatgpt'

async function askQuestion(){
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })
  const res = await api.sendMessage(argv[0])
  console.log(JSON.stringify({
    items: [{
      title: res.text,
      type: 'text',
      valid: true
    }]
  }))
}
askQuestion()