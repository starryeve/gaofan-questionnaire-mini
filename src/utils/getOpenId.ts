import Taro from "@tarojs/taro"
import request from "../request/index"

const getOpenId = () => {
  return new Promise(async (resolve) => {
    try {
      const { data : openId} = await Taro.getStorage({
        key: 'openId'
      })
      resolve(openId)
    } catch(err) {
        const { code } = await Taro.login()
        const res:any = await request({
          method: 'GET',
          url: '/login/openid',
          data: {
            code
          }
        })
        Taro.setStorage({
          key: 'openId',
          data: res.data.data
        })

        resolve(res.data.data)
      }
  })
}

export default getOpenId