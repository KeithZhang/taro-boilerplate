import { View } from "@tarojs/components";

import Tabbar from "ui-base/tabbar";
import TabbarItem from "ui-base/tabbar-item";

import cn from "./index.module.less";
import DemoBlock from "../components/demo-block";

export default function TabbarPage() {
  return (
    <View>
      <DemoBlock title="基本用法">
        <Tabbar custom-class={cn.tabbar}>
          <TabbarItem icon="like_o">标签</TabbarItem>
          <TabbarItem icon="star_o">标签</TabbarItem>
        </Tabbar>
      </DemoBlock>
    </View>
  );
}
