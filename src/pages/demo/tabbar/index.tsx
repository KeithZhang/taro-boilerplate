import { View } from "@tarojs/components";

import Tabbar from "ui-base/tabbar";
import TabbarItem from "ui-base/tabbar-item";

import cn from "./index.module.less";
import DemoBlock from "../components/demo-block";
import { useState } from "@tarojs/taro";

export default function TabbarPage() {
  const [state, setState] = useState({
    active0: "home"
  } as {
    active0: string | number;
  });

  return (
    <View>
      <DemoBlock title="基本用法">
        <Tabbar
          active={state.active0}
          custom-class={cn.tabbar}
          onChange={active => {
            console.log("TabbarPage onChange...", active);
            setState(preState => ({ ...preState, active0: active }));
          }}
        >
          <TabbarItem icon="like_o" name={"home"}>
            首页
          </TabbarItem>
          <TabbarItem icon="star_o" name={"mine"}>
            我的
          </TabbarItem>
        </Tabbar>
      </DemoBlock>
    </View>
  );
}
