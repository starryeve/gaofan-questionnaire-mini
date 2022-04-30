import { View, Image } from "@tarojs/components";

function Interpretation() {
  return (
    <View className='translation'>
      <View className='dividing-line'></View>

      <View className='section'>
        <View className='description paragraph'>
          广外口译队是一支由学生组织、运营且管理的专业学生口译团队，致力于汇集广外高翻最具潜力的学生口译员，建立广外高翻口译队社群与人脉网络。成立以来先后为第15届中国-东盟博览会、广东21世纪海上丝绸之路国际博览会、中乌产能合作工业园投产仪式等国际合作与交流活动提供专业口译服务。
        </View>
        <Image style={{height: '365rpx'}} src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301521373.png'></Image>
      </View>
    </View>
  )
}

export default Interpretation