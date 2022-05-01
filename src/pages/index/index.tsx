import { View, Image, Text, Navigator } from "@tarojs/components"
import { useEffect } from "react"
import "./index.scss"

function Index() {
  useEffect(() => {})

  return (
    <View className='index'>
      <Image className='bg' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301410168.png'></Image>
      <View className='modules'>
        <Navigator className='module' url='/pages/college/college'>
          <Image className='module__icon' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301411915.png'></Image>
          <Text className='module__title'>学院概况</Text>
        </Navigator>
        <Navigator className='module' url='/pages/employment/employment'>
          <Image className='module__icon' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301411721.png'></Image>
          <Text className='module__title'>就业招聘</Text>
        </Navigator>
        <Navigator className='module' url='/pages/practice/practice'>
          <Image className='module__icon' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301411957.png'></Image>
          <Text className='module__title'>实习兼职</Text>
        </Navigator>
        <Navigator className='module' url='/pages/feedback/feedback'>
          <Image className='module__icon' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301412913.png'></Image>
          <Text className='module__title'>反馈建议</Text>
        </Navigator>
      </View>
      <Navigator className='contact' url='/pages/contact/contact'>
        <Text className='contact__title'>联系我们</Text>
      </Navigator>
    </View>
  )
}

export default Index