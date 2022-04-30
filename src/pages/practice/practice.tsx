import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton, AtIcon } from "taro-ui";
import './practice.scss'

function Practice() {
  const addQuestionnaire = () => {
    Taro.navigateTo({
      url: '/pages/questionnaire/questionnaire',
      events: {

      },
      success: (res) => {
        console.log(res);
      }
    })
  }
  return (
    <View className='practice'>
      <View className='title'>我的实习问卷</View>
      <View className='questionnaires'>
        <View className='questionnaire'>
          <View className='questionnaire__info'>
            <View>
              <Text className='questionnaire__info__key'>
                单位名称：
              </Text> 
              <Text className='questionnaire__info__value'>
                Quanta
              </Text> 
            </View>
            <View>
              <Text className='questionnaire__info__key'>
                招聘负责人姓名：
              </Text> 
              <Text className='questionnaire__info__value'>
                KK
              </Text>
            </View>
            <View>
              <Text className='questionnaire__info__key'>
                联系电话：
              </Text>
              <Text className='questionnaire__info__value'>
                1587xxxxxxx
              </Text>
            </View>
          </View>
          <View className='questionnaire__oper'>
            <AtButton className='' circle type='primary' size='small'>已提交</AtButton>
            <AtButton circle type='secondary' size='small'>修改</AtButton>
            <AtButton circle size='small'>删除</AtButton>
          </View>
        </View>

        <View className='questionnaire'>
          <View className='questionnaire__info'>
            <View>
              <Text className='questionnaire__info__key'>
                单位名称：
              </Text> 
              <Text className='questionnaire__info__value'>
                Quanta
              </Text> 
            </View>
            <View>
              <Text className='questionnaire__info__key'>
                招聘负责人姓名：
              </Text> 
              <Text className='questionnaire__info__value'>
                KK
              </Text>
            </View>
            <View>
              <Text className='questionnaire__info__key'>
                联系电话：
              </Text>
              <Text className='questionnaire__info__value'>
                1587xxxxxxx
              </Text>
            </View>
          </View>
          <View className='questionnaire__oper'>
            <AtButton className='' circle type='primary' size='small'>已提交</AtButton>
            <AtButton circle type='secondary' size='small'>修改</AtButton>
            <AtButton circle size='small'>删除</AtButton>
          </View>
        </View>
      </View>


      <AtButton className='submit' circle type='primary' onClick={addQuestionnaire}>
        <AtIcon value='add' size='24px' color='#fff'>
        </AtIcon>
        <Text>
          添加新问卷
        </Text>
      </AtButton>
    </View>
  )
}

export default Practice