import React from 'react'
import Taro,{ View, Text, Button } from '@tarojs/components'
import './index.scss'
import Demo from './demo'
let  Index = React.memo( ()=> {
  return (
    <View className='index'>
      <Demo />
    </View>
  )
})

export default Index