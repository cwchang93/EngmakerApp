/**
 * @api {get}/calendar  取得calendar成員參與資料
 * @apiGroup Calendar
 *
 * @apiParam {String}  host 主持人名字
 * @apiParam {String}  assistHost 主持人名字
 * @apiParam {String}  topic 主題
 * @apiParam {String}  link 主題連結
 * @apiParam {Array}  attendees  當天參加成員
 *
 *
 * @apiSuccessExample Success-Response
 * {
 *  "code": 200,
 *  "msg": "OK",
 *  "data": [{
 *      "date": "2019-09-02",
 *      "morning": true,
 *      "host": "Jinwei",
 *      "assistHost": "CY",
 *      "topic": "How to pick up a girl?",
 *      "link": "https://www.google.com",
 *      "attendees": ["CYC", "Andrew", "Joy", "Bella"]
 *  }]
 *
 * }
 *
 * @api {post}/calendar  填寫當天主持表單
 * @apiGroup Calendar
 *
 * @apiParam {String}  host 主持人名字
 * @apiParam {String}  assistHost 主持人名字
 * @apiParam {String}  topic 主題
 * @apiParam {String}  link 主題連結
 * @apiParam {Array}  attendees  當天參加成員
 *
 *
 * @apiSuccessExample Success-Response2
 * {
 *  "code": 200,
 *  "msg": "OK",
 *
 *  "data": [{
 *      "date": "2019-09-02",
 *
 *      "morning": {
 *          "host": "Jinwei",
 *          "assistHost": "CY",
 *          "topic": "How to pick up a girl?",
 *          "link": "https://www.google.com",
 *          "attendees": ["CYC", "Andrew", "Joy", "Bella"]
 *      },
 *
 *      "night":{
 *          "host": "WeiJ",
 *          "assistHost": "CY",
 *          "topic": "How to pick up a boy?",
 *          "link": "https://www.google.com",
 *          "attendees": ["CYC", "Andrew", "Joy", "Bella"]
 *      }
 *  }]
 *
 * }
 *
 */
