import { View } from "@tarojs/components";
import { useState, ComponentOptions } from "@tarojs/taro";

import cn from "./index.module.less";

export default function HeaderModule() {
  const [state, setState] = useState({
    like: false
  });

  return (
    <View className={`hbox_center ${cn.header_container}`}>
      this is header {state.like}
    </View>
  );
}

HeaderModule.options = {
  addGlobalClass: true
} as ComponentOptions;
