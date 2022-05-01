import { View } from "@tarojs/components";
import { useState } from "react";
import { AtButton, AtMessage, AtTextarea } from "taro-ui";
import Taro from "@tarojs/taro";
import request from "../../request";

import './feedback.scss'


function Feedback() {
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    const res = await request({
      method: 'POST',
      url: '/feedback/new',
      data: {
        content
      }
    })
    console.log(res)
    Taro.atMessage({
      'message': '提交成功',
      'type': 'success',
    })
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/index/index',
      })
    }, 1000);

  }
  return (
    <View className='feedback'>
      <AtMessage />
      <AtTextarea
        height={429}
        value={content}
        onChange={(v) => setContent(v)}
        maxLength={500}
        placeholder='说说您的意见吧！'
      />

      <View className='operations'>
        {/* <AtButton circle >保存</AtButton> */}
        <AtButton circle type='primary' onClick={handleSubmit}>提交</AtButton>
      </View>
    </View>
  )
}

export default Feedback