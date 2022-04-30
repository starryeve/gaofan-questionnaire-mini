import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { useState } from 'react';
import { AtButton, AtTabs, AtTabsPane } from "taro-ui";
import './college.scss'
import Introduction from './introduction/introduction';
import Interpretation from './Interpretation/Interpretation'
import Translation from "./translation/translation";

function College() {
  const [current, setCurrent] = useState(0)
  const tabList = [
    {
      title: '学院介绍'
    },
    {
      title: '口译队'
    },
    {
      title: '笔译队'
    },
  ]
  const handleCurrentChange = (value) => {
    setCurrent(value)
  }

  return (
    <View className='college'>
      <Swiper className='banner' autoplay circular interval={5000} >
        <SwiperItem className='banner__item'>
          <Image className='banner__item__image' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301414930.png'></Image>
        </SwiperItem>
        <SwiperItem className='banner__item'>
          <Image className='banner__item__image' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301418705.png'></Image>
        </SwiperItem>
        <SwiperItem className='banner__item'>
          <Image className='banner__item__image' src='https://ccqstark.oss-cn-guangzhou.aliyuncs.com/image/202204301419752.png'></Image>
        </SwiperItem>
      </Swiper>

      <AtTabs className='tabs' current={current} tabList={tabList} onClick={handleCurrentChange}>
        <AtTabsPane className='tab' current={current} index={0} >
          <Introduction></Introduction>
        </AtTabsPane>
        <AtTabsPane className='tab' current={current} index={1}>
          <Interpretation></Interpretation>
        </AtTabsPane>
        <AtTabsPane className='tab' current={current} index={2}>
          <Translation></Translation>
        </AtTabsPane>
      </AtTabs>
      
    </View>
  )
}

export default College