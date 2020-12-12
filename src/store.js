import { createContainer } from "unstated-next"
import { useState,useCallback } from "react";

export default createContainer(() => {
  const [count, setCount] = useState(0);
  // 这里可以做一些数据的获取操作，例如发送请求之类的
  const [name, setName] = useState('tanjie')
  let add = useCallback(()=>{setCount(val=>val+1)},[count])
  return {
    count,
    setCount,
    add,
    name,
    setName
  };
})

