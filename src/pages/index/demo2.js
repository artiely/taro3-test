import React, { PureComponent } from "react";
import { View, Text, Button } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";
import Row from './row'

function buildData(offset = 0) {
  return Array(20)
    .fill(0)
    .map((_, i) => i + offset);
}


class Demo extends PureComponent {
  constructor(){
    super()
    this.state = {
      data: buildData(0),
    }
  }
  

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  onReachBottom(){
    console.log('触底了')
    this.setState({
      data:this.state.data.concat(buildData(0))
    })
  }
  render() {
    const { data } = this.state;
    return (
      <View>
       {data.map((v,i)=>{
         return <Row index={i}/>
       })}
      </View>
    );
  }
}
export default Demo;
