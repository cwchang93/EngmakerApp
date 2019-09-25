/**
 * @api {get}/calendar  取得calendar成員參與資料
 * @apiGroup Calendar
 *
 * @apiParam {String}  host 主持人名字
 * @apiParam {String}  assistHost 主持人名字
 * @apiParam {String}  topic 主題
 * @apiParam {String}  href 主題連結
 * @apiParam {Array}  attendees  當天參加成員
 *
 *
 * @apiSuccessExample Success-Response
 * {
 *  "code": 200,
 *  "msg": "OK",
 *  "data": {
 *      "hostName": "Jinwei",
 *      "assistHost": "CY",
 *
 *  }
 *
 *
 * }
 */
