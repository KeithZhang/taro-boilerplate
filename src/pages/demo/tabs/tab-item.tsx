import { View } from "@tarojs/components";
import {
  useContext,
  useEffect,
  createContext,
  useState,
  useCallback
} from "@tarojs/taro";



function TabItem(props: any) {
  console.log('TabItem props...', props)
  const {active, name} = props
  const isShow = active === name

  return <View >{props.children}</View>
}

export default TabItem;
