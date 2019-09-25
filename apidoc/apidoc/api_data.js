define({ "api": [
  {
    "type": "get",
    "url": "/calendar",
    "title": "取得calendar成員參與資料",
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
            "field": "href",
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
          "content": "{\n \"code\": 200,\n \"msg\": \"OK\",\n \"data\": {\n     \"hostName\": \"Jinwei\",\n     \"assistHost\": \"CY\",\n\n }\n\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "studygroupApp/calendar.js",
    "groupTitle": "Calendar",
    "name": "GetCalendar"
  }
] });
