import { View } from "@tarojs/components";
import { useState } from "react";
import { AtButton, AtTextarea } from "taro-ui";
import './feedback.scss'

function Feedback() {
  const [content, setContent] = useState('')

  return (
    <View className='feedback'>
      <AtTextarea
        height={429}
        value={content}
        onChange={(v) => setContent(v)}
        maxLength={500}
        placeholder='说说您的意见吧！'
      />

      <View className='operations'>
        <AtButton circle >保存</AtButton>
        <AtButton circle type='primary'>提交</AtButton>
      </View>
    </View>
  )
}

export default Feedback