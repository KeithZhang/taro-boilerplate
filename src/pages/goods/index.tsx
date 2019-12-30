import { View } from "@tarojs/components";
import { useSelector } from "@tarojs/redux";

export default function Goods() {
  const goods = useSelector((state: any) => state.goods);

  console.log("goods...", goods);
  return <View>this is goods page</View>;
}
