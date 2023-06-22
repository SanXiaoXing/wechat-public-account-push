/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx464fd4e64e59abe7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b176e6ddcfab0f3937c29446a13df158',

  PROVINCE: '河南',
  CITY: '安阳',

  USERS: [
    {
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_cXM6TJkduGYjkM6pgNYWzqQjAU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	9Z9PprUKFVG0iLLGp0JhEoi_PoI9vprcnDxdHlJwvDU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-02',
      // 我们在一起已经有xxxx天了的配置

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	9Z9PprUKFVG0iLLGp0JhEoi_PoI9vprcnDxdHlJwvDU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_cXM6TJkduGYjkM6pgNYWzqQjAU',
    }
  ],

}

module.exports = USER_CONFIG

