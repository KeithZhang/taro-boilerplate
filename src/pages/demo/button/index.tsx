import { View } from "@tarojs/components";
import DemoBlock from "../components/demo-block";

import QMButton from "ui-base/button";

export default function ButtonDemo() {
  return (
    <View>
      <DemoBlock title="按钮类型" padding>
        <QMButton customStyle="margin: 5px;">默认按钮</QMButton>
        <QMButton customStyle="margin: 5px;" type="primary">
          主要按钮
        </QMButton>
        <QMButton customStyle="margin: 5px;" type="info">
          信息按钮
        </QMButton>
        <QMButton customStyle="margin: 5px;" type="warning">
          警告按钮
        </QMButton>
        <QMButton type="danger">危险按钮</QMButton>
      </DemoBlock>

      <DemoBlock title="朴素按钮" padding>
        <QMButton customStyle="margin: 5px;" type="primary" plain>
          朴素按钮
        </QMButton>
        <QMButton type="info" plain>
          朴素按钮
        </QMButton>
      </DemoBlock>

      <DemoBlock title="细边框" padding>
        <QMButton customStyle="margin: 5px;" type="primary" plain hairline>
          细边框按钮
        </QMButton>
        <QMButton type="info" plain hairline>
          细边框按钮
        </QMButton>
      </DemoBlock>

      <DemoBlock title="禁用状态" padding>
        <QMButton customStyle="margin: 5px;" type="primary" disabled>
          禁用状态
        </QMButton>
        <QMButton type="info" disabled>
          禁用状态
        </QMButton>
      </DemoBlock>

      <DemoBlock title="禁用状态" padding>
        <QMButton customStyle="margin: 5px;" type="primary" disabled>
          禁用状态
        </QMButton>
        <QMButton type="info" disabled>
          禁用状态
        </QMButton>
      </DemoBlock>

      <DemoBlock title="加载状态" padding>
        <QMButton customStyle="margin: 5px;" type="primary" loading>
          禁用状态
        </QMButton>
        <QMButton
          customStyle="margin: 5px;"
          type="primary"
          loading
          loadingType="spinner"
        >
          禁用状态
        </QMButton>
        <QMButton type="info" loading loadingText="加载中...">
          禁用状态
        </QMButton>
      </DemoBlock>

      <DemoBlock title="图标按钮" padding>
        <QMButton customStyle="margin: 5px;" type="primary" icon="star_o" />
        <QMButton customStyle="margin: 5px;" type="primary" icon="star_o">
          按钮
        </QMButton>

        <QMButton
          plain
          type="primary"
          icon="https://img.yzcdn.cn/vant/logo.png"
        >
          按钮
        </QMButton>
      </DemoBlock>

      <DemoBlock title="图标按钮" padding>
        <QMButton customStyle="margin: 5px;" type="primary" size="large" block>
          大号按钮
        </QMButton>
        <QMButton customStyle="margin: 5px;" type="primary">
          普通按钮
        </QMButton>

        <QMButton customStyle="margin: 5px;" type="primary" size="small">
          小型按钮
        </QMButton>
        <QMButton type="primary" size="mini">
          迷你按钮
        </QMButton>
      </DemoBlock>
    </View>
  );
}
