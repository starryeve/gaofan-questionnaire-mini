import { View, Image } from "@tarojs/components"
import Taro from "@tarojs/taro"
import './contact.scss'

function Contact() {
  return (
    <View className='contact'>
      <View className='title'>欢迎联系我们</View>
      <View className='connections'>
        <View className='connection'>
          <View className='connection__icon'>
            <Image src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011404441.png'></Image>
          </View>
          <View className='connection__info'>
            <View className='connection__info--key'>
              电话
            </View>
            <View className='connection__info--value'>
              020-36207180
            </View>
          </View>

        </View>
        <View className='connection'>
          <View className='connection__icon'>
            <Image src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011404872.png'></Image>
          </View>
          <View className='connection__info'>
            <View className='connection__info--key'>
              E-mail
            </View>
            <View className='connection__info--value'>
              200210016@oamail.gdufs.edu.cn
            </View>
        </View>
        </View>
        <View className='connection'>
          <View className='connection__icon'>
            <Image src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011409742.png'></Image>
          </View>
          <View className='connection__info'>
            <View className='connection__info--key'>
              地址
            </View>
            <View className='connection__info--value'>
              广州市白云区白云大道北2号广州市黄埔区海丝知识中心B1栋
            </View>
          </View>

        </View>
        <View className='connection'>
          <View className='connection__icon'>
            <Image src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011410201.png'></Image>
          </View>
          <View className='connection__info'>
            <View className='connection__info--key'>
              微信公众号
            </View>
            <View className='connection__info--value'>
              广外高翻SITS
            </View>
            <Image onClick={() =>
              {Taro.previewImage({
                current: 'https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011411798.png',
                urls: ['https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011411798.png']}
              )}}
              className='qr-code' 
              src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202205011411798.png'
            >

            </Image>
        </View>
        </View>
      </View>
    </View>
  )
}

export default Contact