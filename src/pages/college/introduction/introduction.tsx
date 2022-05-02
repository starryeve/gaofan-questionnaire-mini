import { View, Image } from "@tarojs/components";
import './introduction.scss'

function Introduction() {
  return (
    <View className='introduction'>
      <View className='dividing-line'></View>

      <View className='section'>
        <View className='title'>我们是谁？</View>
        <View className='description'>
          我国最早建立翻译专业本科、本科双学位、硕士、专业硕士和博士完整人才培养体系的单位。
        </View>
        <View className='description'>
          联合国高端翻译人才培养大学外延计划的中文合作院校、国际大学翻译学院联合会（CIUTI）和国际译联（FIT）联席会员，列入国际会议口译员协会学校名录（AIIC School Directory），是世界翻译教育联盟（WITTA）的首创单位。
        </View>
        <View className='description'>
          权威组织的认可，是亚太地区高素质、国际化、融通型翻译人才培养高地。
        </View>
      </View>

      <View className='dividing-line'></View>

      <View className='section'>
        <View className='title'>我们怎么做？</View>
        <View className='description'>
          学院在创业使命的感召下，随着时代的发展，不断推陈出新各种专业模块和课程体系，始终以培养高素质、高层次的翻译人才为初心使命。
        </View>
        <View className='description paragraph'>
          2020年，以进驻知识城，加强校地、校企合作为契机，努力建设国际一流的翻译学院。 
        </View>
        <Image src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301505710.png'></Image>
        <View className='description indentation paragraph'>
          学院拥有一支既具备实践经验又从事理论研究的高水平师资队伍，专任教师中90%以上具有海外留学或工作经历。
        </View>
        <View className='description'>
          学院培养4类人才：
        </View>
        <View className='description indentation'>
          (1) 翻译学博士(PhD)
        </View>
        <View className='description indentation'>
          (2)翻译学硕士（MA）：设翻译与跨文化研究、口译研究、翻译教育研究、文学翻译研究、翻译理论研究等5个方向
        </View>
        <View className='description indentation'>
          (3)翻译硕士专业学位研究生
          (MTI）：设国际会议传译、应用口译、商务翻译、法律翻译、传媒翻译、翻译与本地化管理等6个方向
        </View>
        <View className='description indentation'>
          (4)翻译专业本科生（BTI）
        </View>
      </View>

      <View className='dividing-line'></View>

      <View className='section'>
        <View className='title'>提供哪些机会？</View>
        <View className='description  paragraph'>
          学生社会实践分为校内和校外两个层次。
        </View>
        <View className='description'>
          在校内，我们秉承研究生教育侧重“自我教育、自我管理和自我成长”的宗旨，为他们提供步入社会前的实战实训机会。
        </View>
        <View className='description paragraph'>
          在校外，通过校企实践基地的建设、遴选校外导师、举办专业行业会议等方式，共建双方的柔性资源池，实现优势互补，培养高层次的应用型人才。
        </View>
        <Image style={{height: '220rpx'}} src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301506248.jpg'></Image>
        <View className='annotation'>
          高翻学子在联合国日内瓦办事处实习
        </View>
        <Image style={{height: '220rpx'}} src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301509682.jpg'></Image>
        <View className='annotation'>
          高翻学子在欧盟口译总司实习
        </View>
        <View className='description paragraph'>
          学校开展知识城校区的“移动课堂”活动，组织学生到科大讯飞、东莞华为等企业走访参观、联系校友，帮助学生认识就职于国际组织、国家部委的优秀校友，使得学生逐步明确职业生涯发展方向。
        </View>
        <Image style={{height: '627rpx'}} src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301510229.jpg'></Image>
      </View>
    </View>
  )
}

export default Introduction