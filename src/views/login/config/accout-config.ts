export const accountRules = {
  name: [
    {
      required: true,
      message: '用户名是必须的~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名长度为 5 ~ 10 个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必须的~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码长度至少为 3 个字母或数字',
      trigger: 'blur'
    }
  ]
}
export const phoneRules = {
  num: [
    {
      required: true,
      message: '手机号是必须的~',
      trigger: 'blur'
    },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '请输入正确的手机号~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必须的~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4}$/,
      message: '验证码错误~',
      trigger: 'blur'
    }
  ]
}
