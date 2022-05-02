import { View, Text } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import { AtButton, AtIcon, AtModal } from "taro-ui";
import request from "../../request/index";
import getOpenId from "../../utils/getOpenId";
import './practice.scss'

function Practice() {
  const [modalDelete, setModalDelete] = useState({
    opened: false,
    id: 0
  })
  const [questionnaires, setQuestionnaires] = useState([])


  const getQuestionnaires = async () => {
    const openId = await getOpenId()
    const res = await request({
      method: 'GET',
      url: '/recruit/get_list/' + openId
    })
    const q = res.data.data.filter((item) => item.intern === 1)
    setQuestionnaires(q)
    console.log(res);
  }

  const addQuestionnaire = async () => {
    Taro.navigateTo({
      url: '/pages/newQuestionnaire/newQuestionnaire?intern=1'
    })
  }

  const handleModify = async (id) => {
    Taro.navigateTo({
      url: `/pages/modifyQuestionnaire/modifyQuestionnaire?intern=1&id=${id}`,
    })
  }

  const handleDelete = async (id) => {
    setModalDelete({
      id,
      opened: true
    })
  }

  const deleteQuestionnaire = async () => {
    const res = await request({
      method: 'DELETE',
      url: '/recruit/' + modalDelete.id
    })
    setModalDelete({
      id: 0,
      opened: false
    })
    getQuestionnaires()
  }


  useDidShow(() => {
    getQuestionnaires()
  })
  // useEffect(() => {
  //   getQuestionnaires()
  // }, [])

  return (
    <View className='practice'>
      <AtModal
        isOpened={modalDelete.opened}
        title='是否删除该问卷？'
        cancelText='取消'
        confirmText='确认'
        onClose={() => setModalDelete({...modalDelete, opened: false})}
        onCancel={() => setModalDelete({...modalDelete, opened: false})}
        onConfirm={deleteQuestionnaire}
      />

      <View className='title'>用人单位实习岗位信息填报</View>
      <View className='questionnaires'>
        {
          questionnaires.map((item, index) => {
            return (
              <View key={index} className='questionnaire'>
              <View className='questionnaire__info'>
                <View>
                  <Text className='questionnaire__info__key'>
                    单位名称：
                  </Text> 
                  <Text className='questionnaire__info__value'>
                    {item.companyName}
                  </Text>
                </View>
                <View>
                  <Text className='questionnaire__info__key'>
                    实习负责人姓名：
                  </Text>
                  <Text className='questionnaire__info__value'>
                    {item.hrName}
                  </Text>
                </View>
                <View>
                  <Text className='questionnaire__info__key'>
                    联系电话：
                  </Text>
                  <Text className='questionnaire__info__value'>
                    {item.mobilePhone}
                  </Text>
                </View>
              </View>
              <View className='questionnaire__oper'>
                {
                  item.submit === 0 ? (
                    <>
                      <AtButton circle type='secondary' size='small' onClick={
                       () => handleModify(item.id)
                      }
                      >修改</AtButton>
                      <AtButton circle size='small' onClick={
                        () => {handleDelete(item.id)}
                      }
                      >删除</AtButton>
                    </>
                  ) : (
                    <AtButton circle type='primary' size='small'>已提交</AtButton>
                  )
                }
              </View>
            </View>
            )
          })
        }
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