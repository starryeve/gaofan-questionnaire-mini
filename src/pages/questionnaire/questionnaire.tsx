import { Picker, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtButton, AtForm, AtIcon, AtInput, AtList, AtListItem , AtMessage } from "taro-ui";
import './questionnaire.scss'

function Questionnaire() {
  const [form, setForm] = useState({
    company_name: '',
    work_time: '',
    content: '',
    attachment: '',
    salary: '',
    hr_name: '',
    email: '',
    mobile_phone: '',
    basic_address: '',
  })
  const handleSubmit = () => {
    Taro.atMessage({
      'message': '提交成功',
      'type': 'success',
    })
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/complete/complete',
        events: {

        },
        success: (res) => {
          console.log(res);
        }
      })
    }, 3000);
  }
  const handleSave = () => {
    Taro.atMessage({
      'message': '保存成功',
      'type': 'success',
    })
    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/questionnaire/questionnaire',
        events: {

        },
        success: (res) => {
          console.log(res);
        }
      })
    }, 3000)
  }
  const handleReset = () => {

  }
  const changeForm = (a,b) => {
    console.log(a);
    console.log(b);
    
  }

  const changeRegion = (region) => {
    // 参数region为选择的省市区
    console.log(region);
  }

  return (
    <View className='questionnaire'>
      <AtMessage />
      <AtForm className='form'>
        <View className='form-item'>
          <View className='form-item__label'>
            <Text>公司名称</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
          <AtInput placeholder='请输入公司名称'
            required name='company_name'
            type='text'
            onChange={e => {setForm({
              ...form,
              company_name: String( e )
            })}}
          />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>公司模式</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入公司名称'
              required name='company_name'
              type='text'
              onChange={e => {setForm({
                  ...form,
                  company_name: String( e )
                })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>公司地点</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <Picker mode='region' value={form.basic_address.split('/')} onChange={e => {setForm({
              ...form,
              basic_address: e.target.value.join('/')
            })}}
            >
              <AtList>
                <AtListItem title={form.basic_address.length > 0 ? form.basic_address : '请选择省市区'}>
                </AtListItem>
              </AtList>
            </Picker>
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作时间</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入公司名称'
              required name='company_name'
              type='text'
              onChange={e => {setForm({
                ...form,
                company_name: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作时间</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入工作时间'
              required name='company_name'
              type='text'
              onChange={e => {setForm({
                ...form,
                work_time: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>工作内容</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入工作内容'
              required name='company_name'
              type='text'
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
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入任职要求'
              required name='company_name'
              type='text'
              onChange={e => {setForm({
                ...form,
                attachment: String( e )
              })}}
            />
          </View>
        </View>

        <View className='form-item'>
          <View className='form-item__label'>
            <Text>薪酬</Text>
            <Text className='form-item__label--required'>*</Text>
          </View>
          <View className='form-item__input'>
            <AtInput placeholder='请输入薪酬'
              required name='company_name'
              type='text'
              onChange={e => {setForm({
                ...form,
                salary: String( e )
              })}}
            />
          </View>
        </View>

        <View className='divide-line'></View>

        <View className='hr-info'>
          <View className='hr-title'>
            <Text>请填写招聘负责人信息</Text>
            <Text style={{color: '#F56565'}}>*</Text>
          </View>
          <AtInput placeholder='请输入姓名'
            required name='hr_name'
            type='text'
            onChange={e => {setForm({
              ...form,
              hr_name: String( e )
            })}}
          />
          <AtInput placeholder='请输入联系电话'
            required name='mobile_phone'
            type='text'
            onChange={e => {setForm({
              ...form,
              mobile_phone: String( e )
            })}}
          />
          <AtInput placeholder='请输入电子邮箱'
            required name='mobile_phone'
            type='text'
            onChange={e => {setForm({
              ...form,
              email: String( e )
            })}}
          />
        </View>

        <View className='file-upload'>
          <AtButton className='file-upload__button' circle>
            <AtIcon value='link' size='20' color='#AFAFAF'></AtIcon>
            <Text>上传文件</Text>
          </AtButton>
          <Text className='file-upload__tip'>（如有详细用人清单，请上传）</Text>
        </View>

      </AtForm>

      <View className='operations'>
        <AtButton type='primary' onClick={handleSave}>保存</AtButton>
        <AtButton onClick={handleSubmit}>提交</AtButton>
      </View>
    </View>
  )
}

export default Questionnaire