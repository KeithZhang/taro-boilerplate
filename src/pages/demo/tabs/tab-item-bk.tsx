import { View } from "@tarojs/components";
import {
  useContext,
  useEffect,
  createContext,
  useState,
  useCallback
} from "@tarojs/taro";

import { contextFactory } from "./context";


function TabItemBK(props: any) {
  console.log("TabItem props...", props);
  const TabsContext = contextFactory(props.dataId);
  const {addItem }= useContext(TabsContext) || {};
  console.log("TabItem ...", addItem);

  useEffect(() => {
    addItem && addItem(props.title)
  })

  return <View>context ->{props.title}</View>;
}

export default Taro.memo(TabItemBK);
