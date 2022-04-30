import { View, Image } from "@tarojs/components";

function Translation() {
  return (
    <View>
      <View className='dividing-line'></View>
      <View className='section'>
        <View className='description paragraph'>
          广外高翻笔译队由我院翻译学与翻译专业学位研究生组成，是一支致力于中英互译的专业翻译队伍。团队成员拥有国家人事部二级口译、国家人事部二级笔译(覆盖率达 33% 以上)、上海高级口译、高级笔译以及英语专业八级(覆盖率达 95% 以上)等资格证书，掌握计算机辅助翻译(技术)，能够使用 SDL Trados、Yicat 等翻译软件并配备有专业机辅实验室，严格按照“译前处理-翻译-自审-互审-一审 -二审-译后编辑-定稿”的流程开展翻译。
        </View>
        <Image style={{height: '365rpx'}} src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301524525.png'>
        </Image>
      </View>
    </View>
  )
}

export default Translation