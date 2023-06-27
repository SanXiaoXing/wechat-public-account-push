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

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },

  
  USERS: [
    {
      
      // 想要发送的人的名字
      name: 'SanXiaoXing', 
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_cXM6TJkduGYjkM6pgNYWzqQjAU', 
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Q4yyNQlwMDc9wlsbz6ykkWMT3oiZGBPI-HKbJVt0TEI',
      province: '北京',
      city: '北京',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    }, 
    {
      name: '蔡文博',
      id: 'o_cXM6TeI7sGXQsRYt6LGJjz5CE4',
      useTemplateId: 'Q4yyNQlwMDc9wlsbz6ykkWMT3oiZGBPI-HKbJVt0TEI',
      province: '河南',
      city: '安阳',
    },
  ],
 

  // 【推送完成提醒】模板id, 用来看自有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Tomz0ljPYxxyzcmCuk-z_S1ZjOKjdq8GBYv8lE2hrMw',

  CALLBACK_USERS: [
    {
      name: '帅哥兼靓仔',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_cXM6TJkduGYjkM6pgNYWzqQjAU',
    }
  ],

}

module.exports = USER_CONFIG

