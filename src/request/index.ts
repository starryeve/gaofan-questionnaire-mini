import Taro from "@tarojs/taro"

export const base_url = 'https://springboot-4dol-1884990-1311653149.ap-shanghai.run.tcloudbase.com'

const request = (option: Taro.request.Option) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Taro.request({
        ...option,
        url: base_url + option.url
      })

      resolve(res)
    } catch(err) {
      reject(err)
    }
  })
}

export default request