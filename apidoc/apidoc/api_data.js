define({ "api": [
  {
    "type": "post",
    "url": "/calendar",
    "title": "填寫當天主持表單",
    "group": "Calendar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>主持人名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assistHost",
            "description": "<p>主持人名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>主題</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>主題連結</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "attendees",
            "description": "<p>當天參加成員</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n \"code\": 200,\n \"msg\": \"OK\",\n \"data\": [{\n     \"date\": \"2019-09-02\",\n     \"morning\": true,\n     \"host\": \"Jinwei\",\n     \"assistHost\": \"CY\",\n     \"topic\": \"How to pick up a girl?\",\n     \"link\": \"https://www.google.com\",\n     \"attendees\": [\"CYC\", \"Andrew\", \"Joy\", \"Bella\"]\n }]\n\n}",
          "type": "json"
        },
        {
          "title": "Success-Response",
          "content": "{\n \"code\": 200,\n \"msg\": \"OK\",\n \"data\": [{\n     \"date\": \"2019-09-02\",\n     \"morning\": true,\n     \"host\": \"Jinwei\",\n     \"assistHost\": \"CY\",\n     \"topic\": \"How to pick up a girl?\",\n     \"link\": \"https://www.google.com\",\n     \"attendees\": [\"CYC\", \"Andrew\", \"Joy\", \"Bella\"]\n }]\n \"data\": [{\n     \"date\": \"2019-09-02\",\n\n     \"morning\": {\n         \"host\": \"Jinwei\",\n         \"assistHost\": \"CY\",\n         \"topic\": \"How to pick up a girl?\",\n         \"link\": \"https://www.google.com\",\n         \"attendees\": [\"CYC\", \"Andrew\", \"Joy\", \"Bella\"]\n     }\n     \"night\":{\n         \"host\": \"WeiJ\",\n         \"assistHost\": \"CY\",\n         \"topic\": \"How to pick up a boy?\",\n         \"link\": \"https://www.google.com\",\n         \"attendees\": [\"CYC\", \"Andrew\", \"Joy\", \"Bella\"]\n     }\n }]\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "studygroupApp/calendar.js",
    "groupTitle": "Calendar",
    "name": "PostCalendar"
  }
] });
