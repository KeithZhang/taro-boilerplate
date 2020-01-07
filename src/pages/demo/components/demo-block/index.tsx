import { View } from "@tarojs/components";

import cn from "./index.module.less";

interface IDemoBlockProps {
  title?: string;
  padding?: string | number;
  children?: any;
}

export default function DemoBlock(props: IDemoBlockProps) {
  return (
    <View
      className={`custom-class ${cn.demo_block} ${cn.van_clearfix} ${
        props.padding ? cn.demo_block__padding : ""
      }`}
    >
      {props.title ? (
        <View className={cn.demo_block__title}>{props.title}</View>
      ) : null}
      {props.children}
    </View>
  );
}
