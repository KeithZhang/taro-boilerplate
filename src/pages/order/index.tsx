import { View } from "@tarojs/components";
import { useSelector } from "@tarojs/redux";

export default function Order() {
  const order = useSelector((state: any) => state.order);

  console.log("order...", order);
  return <View>this is order page</View>;
}
