import { View } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function Header() {
  const [state, setState] = useState({
    like: false
  });

  return <View>this is header {state.like}</View>;
}
