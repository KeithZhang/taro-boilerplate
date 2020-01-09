import { View } from "@tarojs/components";

import cn from "./index.module.less";
import { useState, ComponentOptions } from "@tarojs/taro";

export default function BottomModule() {
  const [state, setState] = useState({
    like: true
  });

  return (
    <View className={`hbox_center ${cn.bottom_container}`}>
      this is bottom {state.like}
    </View>
  );
}

BottomModule.options = {
  addGlobalClass: true
} as ComponentOptions;
