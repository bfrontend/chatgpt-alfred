module.exports = {
  "outputName": "chatgpt",
  "bundleid": "com.webxmsj.chatgpt-alfred",
  "category": "Tools",
  "connections": {
    "6FB6CA6F-0D98-4FCB-BAC0-7D602EEBEDC5": [
      {
        "destinationuid": "F59B3122-1FEA-4A98-89C3-59048BA203F5",
        "modifiers": 0,
        "modifiersubtext": "",
        "vitoclose": false
      }
    ]
  },
  "createdby": "webxmsj",
  "description": "An alfred tool that uses chatgpt",
  "disabled": false,
  "name": "chatgpt-alfred",
  "objects": [
    {
      "config": {
        "argumenttype": 0,
        "keyword": "gpt",
        "subtext": "",
        "text": "咨询chatgpt",
        "withspace": true
      },
      "type": "alfred.workflow.input.keyword",
      "uid": "6FB6CA6F-0D98-4FCB-BAC0-7D602EEBEDC5",
      "version": 1
    },
    {
      "config": {
        "alfredfiltersresults": false,
        "alfredfiltersresultsmatchmode": 0,
        "argumenttreatemptyqueryasnil": true,
        "argumenttrimmode": 0,
        "argumenttype": 0,
        "escaping": 102,
        "queuedelaycustom": 3,
        "queuedelayimmediatelyinitially": true,
        "queuedelaymode": 1,
        "queuemode": 1,
        "runningsubtext": "",
        "script": "./index '{query}'",
        "scriptargtype": 0,
        "scriptfile": "",
        "subtext": "",
        "title": "正在询问……",
        "type": 5,
        "withspace": true
      },
      "type": "alfred.workflow.input.scriptfilter",
      "uid": "F59B3122-1FEA-4A98-89C3-59048BA203F5",
      "version": 3
    }
  ],
  "readme": "一个支持在alfred中使用chatgpt的小工具",
  "uidata": {
    "6FB6CA6F-0D98-4FCB-BAC0-7D602EEBEDC5": {
      "xpos": 70,
      "ypos": 165
    },
    "F59B3122-1FEA-4A98-89C3-59048BA203F5": {
      "xpos": 300,
      "ypos": 165
    }
  },
  "userconfigurationconfig": [],
  "variables": {
    "OPENAI_API_KEY": "sk-xxx"
  },
  "variablesdontexport": [
    "OPENAI_API_KEY"
  ],
  "version": "1.0",
  "webaddress": "https://www.webxmsj.com"
}