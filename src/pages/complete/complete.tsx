import { View, Image, Text } from "@tarojs/components";
import Taro, { useDidHide } from "@tarojs/taro";
import './complete.scss'
import NavBar from "../../components/Navbar";


function Complete() {

  // useDidHide(() => Taro.navigateTo({
  //   url: '/pages/index/index'
  // }))
  return (
    <>
    <NavBar iconTheme='white' home onHome={() => Taro.navigateTo({url: '/pages/index/index'})} background='#2B6FF7' title='填写完成' color='#fff'></NavBar>
      <View className='complete'>
        <Image className='figure' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205010106734.png' />
        <View className='thank'>
          <Text >感谢您的填写！</Text>
        </View>
        <View className='message'>
          <Text >您宝贵的招聘信息将会为高翻学子</Text>
        </View>
        <View className='message'>
          <Text >提供很大的帮助。</Text>
        </View>
      </View>
    </>

  )
}

export default Complete