/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4f9ce2bd32fb5713',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7c2f7e4cfd006167e687e0ef152a0958',

  PROVINCE: '福建',
  CITY: '福州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'KK',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oB_ra6RZupbniXigPUeAPlz8cMho',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jCUhLK2yH8VpwutvSfw3DmK0P-39oa7-3F2BdH35NWI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '节日', name: 'KK的生日', year: '1997', date: '03-12',
        },
        {
          type: '*节日', name: 'KK的农历生日', year: '1997', date: '03-12',
        },
        {
          type: '节日', name: 'Ta的生日', year: '1996', date: '04-29',
        },
        {
          type: '*节日', name: 'Ta的农历生日', year: '1996', date: '04-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      //customizedDateList: [
        // 在一起的日子
        //{ keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
     // ],
    },
   
    {
      // 想要发送的人的名字
      name: 'KK的今日运势',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oB_ra6RZupbniXigPUeAPlz8cMho',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '2zQnwDdxHxpd1mLyqsJ8cTp9yhQ3BFF75Koxyc09CB8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '节日', name: 'KK的生日', year: '1997', date: '03-12',
        },
        {
          type: '*节日', name: 'KK的农历生日', year: '1997', date: '03-12',
        },
        {
          type: '节日', name: 'Ta的生日', year: '1996', date: '04-29',
        },
        {
          type: '*节日', name: 'Ta的农历生日', year: '1996', date: '04-29',
        },
      ],
    },
    
        {
      // 想要发送的人的名字
      name: '嘤嘤嘤',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oB_ra6RHP-7FIynVjMncToDc4ML8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qN20d_2Tmd_e5DypQ25wf25PlyGbmH15KUpAH5XgVQs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '节日', name: 'KK的生日', year: '1997', date: '03-12',
        },
//         {
//           type: '*节日', name: 'KK的农历生日', year: '1997', date: '03-12',
//         },
//         {
//           type: '节日', name: 'Ta的生日', year: '1996', date: '04-29',
//         },
//         {
//           type: '*节日', name: 'Ta的农历生日', year: '1996', date: '04-29',
//         },
      ],
    },
    
    {
      // 想要发送的人的名字
      name: '嘤嘤嘤的今日运势',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oB_ra6RHP-7FIynVjMncToDc4ML8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'T9lpER72GBE4Y95FSBlAZktZXKw5yAET9wYR4Hp2PuY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-29',
    },
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BG2FHHIaASyPLLr45j2YhlbkBvQVFlzs6gVdZkcf3jo',

  CALLBACK_USERS: [
    {
      name: 'KK',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oB_ra6RZupbniXigPUeAPlz8cMho',
    }
  ],

}

module.exports = USER_CONFIG

