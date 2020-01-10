import { View } from "@tarojs/components";
import DemoBlock from "../components/demo-block";

import QMLoading from "ui-base/loading";

import cn from "./index.module.less";

export default function LoadingPage() {
  return (
    <View>
      <DemoBlock title="加载类型" padding>
        <QMLoading custom-class={cn.demo_loading} />
        <QMLoading custom-class={cn.demo_loading} type="spinner" />
      </DemoBlock>
      <DemoBlock title="自定义颜色" padding>
        <QMLoading custom-class={cn.demo_loading} color="#1989fa" />
        <QMLoading
          custom-class={cn.demo_loading}
          type="spinner"
          color="#1989fa"
        />
      </DemoBlock>
      <DemoBlock title="加载文案" padding>
        <QMLoading custom-class={cn.demo_loading} size="24px">
          加载中...
        </QMLoading>
      </DemoBlock>
      <DemoBlock title="垂直排列" padding>
        <QMLoading custom-class={cn.demo_loading} size="24px" vertical>
          加载中...
        </QMLoading>
      </DemoBlock>
    </View>
  );
}
