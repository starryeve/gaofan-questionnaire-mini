import { Picker, View, Text } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import getOpenId from "../../utils/getOpenId";
import { AtButton, AtForm, AtIcon, AtInput, AtList, AtListItem , AtMessage } from "taro-ui";
import request from "../../request/index";
import './questionnaire.scss'

function Questionnaire() {
  const { params } = useRouter()
  const [form, setForm] = useState({
    companyName: '', // 公司名称
    mode: '', // 线上或者线下
    basicAddress: '', // 省市区
    detailedAddress: '', // 详细地址
    workTime: '', // 工作时间
    content: '', // 工作内容
    jd: '', // 任职要求
    salary: '', // 薪资范畴
    hrName: '', // 负责人姓名
    email: '', // 联系人邮箱
    mobilePhone: '', // 联系人电话
    attachment: '', // 附件 url,
    attachment_name: '', // 附件名称

    intern: 0, // 0表示实习，1表示正职
    submit: 0, // 表示未提交，1表示提交
    openid: ''
  })
  const [selector] = useState({
    mode: ['线上', '线下', '混合‘],
    salary: ['面谈', '5000-7000', '7001-10000', '10000以上', '其他']
  })

  const getQuestionnaire = async () => {
    const openId = await getOpenId()
    const id = params.id
    setForm({
      ...form,
      openid: openId as string
    })
    if(!id) return

    const res = await request({
      method: 'GET',
      url: '/recruit/one/' + id
    })
    setForm(res.data.data)
  }

  const handleFileChoose = async () => {
    try {
      const { tempFiles } = await Taro.chooseMessageFile({
        count: 1,
        type: 'file',
      })
      const res = await Taro.uploadFile({
        url: 'https://springboot-4dol-1884990-1311653149.ap-shanghai.run.tcloudbase.com/recruit/upload',
        filePath: tempFiles[0].path,
        name: 'file',
        formData: {
          'file': tempFiles[0]
        }
      })
      setForm({
        ...form,
        attachment_name: tempFiles[0].name,
        attachment: JSON.parse(res.data).data
      })

    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = async () => {
    let allHasVal = true
    for(const key in form) {
      const val = form[key]
      if( key!== 'attachment' && key!== 'attachmentName' && String(val).trim().length === 0)  {
        allHasVal = false
        console.log(form);
      }
    }
    if(!allHasVal) return Taro.atMessage({
      'message': '不能有空项',
      'type': 'error',
    })
    
    if(form.submit === 0) {
      const res = await request({
        method: 'POST',
        url: '/recruit/new',
        data: form
      })
      console.log(res);
      Taro.atMessage({
        'message': '提交成功',
        'type': 'success',
      })
      setTimeout(() => {
        Taro.navigateTo({
          url: '/pages/complete/complete',
        })
      }, 1000);
    } else {
      const res = await request({
        method: 'PUT',
        url: '/recruit/submit/' + params.id,
        data: form
      })
      console.log(res);
      Taro.atMessage({
        'message': '提交成功',
        'type': 'success',
      })
      setTimeout(() => {
        Taro.navigateTo({
          url: '/pages/complete/complete',
        })
      }, 1000);
    }
  }

  const handleSave = async () => {
    if(form.submit === 0) {
      const res = await request({
        method: 'POST',
        url: '/recruit/new',
        data: form
      })
      console.log(res);
      Taro.atMessage({
        'message': '保存成功',
        'type': 'success',
      })
    } else {
      const res = await request({
        method: 'PUT',
        url: '/recruit/modify',
        data: form
      })
      console.log(res);
      Taro.atMessage({
        'message': '保存成功',
        'type': 'success',
      })
    }
    // setTimeout(() => {
    //   const page = params.page
    //   Taro.navigateTo({
    //     url: `/pages/${page}/${page}`,
    //   })
    // }, 1000);
  }


  useEffect(() => {
    getQuestionnaire()
  }, [])

  return (
    <View className='questionnaire'>
      <AtMessage />
      <AtForm className='form'>
        <View className='form-item'>
          <View className='form-item__label'>
            <Text>公司名称</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
          <AtInput placeholder='请输入公司名称'
            required name='companyName'
            type='text'
            value={form.companyName}
            onChange={e => {
              setForm({
              ...form,
              companyName: String( e )
            })}}
          />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作模式</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
          <View className='form-item__input'>
            <Picker mode='selector'
              range={selector.mode}
              onChange={e => {
                setForm({
                ...form,
                mode: selector.mode[ e.detail.value ]
              })}}
            >
                <AtList>
                  <AtListItem className='form-item__label--placeholder'
                    title={form.mode || '请选择工作模式'}
                  >
                  </AtListItem>
                </AtList>
              </Picker>
          </View>
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>公司地点</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
            <Picker mode='region' value={form.basicAddress.split('/')} onChange={e => {setForm({
              ...form,
              basicAddress: e.detail.value.join('/')
            })}}
            >
              <AtList>
                <AtListItem className='form-item__label--placeholder' title={form.basicAddress || '请选择省市区'}>
                </AtListItem>
              </AtList>
            </Picker>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入详细地址'
              required name='companyName'
              type='text'
              value={form.detailedAddress}
              onChange={e => {setForm({
                ...form,
                detailedAddress: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作时间</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入工作时间'
              required name='companyName'
              type='text'
              value={form.workTime}
              onChange={e => {setForm({
                ...form,
                workTime: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作内容</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入工作内容'
              required name='companyName'
              type='text'
              value={form.content}
              onChange={e => {setForm({
                ...form,
                content: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>任职要求</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入任职要求'
              required name='companyName'
              type='text'
              value={form.jd}
              onChange={e => {setForm({
                ...form,
                jd: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>薪酬</Text>
            <Text className='form-item__label--required'> * </Text>
          </View>
          <View className='form-item__input'>
            <Picker mode='selector'
              range={selector.salary}
              onChange={e => {
                setForm({
                ...form,
                salary: selector.salary[e.detail.value]
              })}}
            >
                <AtList>
                  <AtListItem className='form-item__label--placeholder'
                    title={form.salary || '请选择薪资范畴'}
                  >
                  </AtListItem>
                </AtList>
              </Picker>
          </View>
        </View>

        <View className='divide-line'></View>

        <View className='hr-info'>
          <View className='hr-title'>
            <Text>请填写招聘负责人信息</Text>
            <Text style={{color: '#F56565'}}> * </Text>
          </View>
          <AtInput placeholder='请输入姓名'
            required name='hrName'
            type='text'
            value={form.hrName}
            onChange={e => {setForm({
              ...form,
              hrName: String( e )
            })}}
          />
          <AtInput placeholder='请输入联系电话'
            required name='mobilePhone'
            type='text'
            value={form.mobilePhone}
            onChange={e => {setForm({
              ...form,
              mobilePhone: String( e )
            })}}
          />
          <AtInput placeholder='请输入电子邮箱'
            required name='mobilePhone'
            type='text'
            value={form.email}
            onChange={e => {setForm({
              ...form,
              email: String( e )
            })}}
          />
        </View>

        <View className='file-upload'>
          <AtButton className='file-upload__button' circle onClick={handleFileChoose}> 
            <AtIcon value='link' size='20' color='#AFAFAF'></AtIcon>
            <Text>上传文件</Text>
          </AtButton>
          <View className='file-upload__tip'>
            {form.attachment ? form.attachment_name : '（如有详细用人清单，请上传）'}
          </View>
        </View>

      </AtForm>

      <View className='operations'>

        <AtButton onClick={handleSave}>保存</AtButton>
        <AtButton type='primary' onClick={handleSubmit}>提交</AtButton>

      </View>
    </View>
  )
}

export default Questionnaire