import React, { PureComponent } from "react";
import { View, Text, Button } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";

function buildData(offset = 0) {
  return Array(1000)
    .fill(0)
    .map((_, i) => i + offset);
}
const Row = React.memo(({ index, style, data }) => {
  let v = data[index];
  return (
    <View className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index} :
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View>D</View>
    </View>
  );
});

class Demo extends PureComponent {
  state = {
    data: buildData(0),
  };

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    const { data } = this.state;
    return (
      <View>
        <VirtualList
          height={500} /* 列表的高度 */
          width="100%" /* 列表的宽度 */
          itemData={data} /* 渲染列表的数据 */
          itemCount={data.length} /*  渲染列表的长度 */
          overscanCount={10}
          itemSize={100} /* 列表单项的高度  */
        >
          {Row}
        </VirtualList>
      </View>
    );
  }
}
export default Demo;
