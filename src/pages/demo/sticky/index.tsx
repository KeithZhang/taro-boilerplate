import { View, Text, ScrollView } from "@tarojs/components";
import DemoBlock from "../components/demo-block";
import Sticky from "ui-base/sticky";
import QMButton from "ui-base/button";

import "./index.module.less";
import { useState } from "@tarojs/taro";

export default function StickyDemo() {
  const container = () => Taro.createSelectorQuery().select("#container");

  return (
    <View>
      <DemoBlock title="基本用法">
        <Sticky>
          <QMButton type="primary" customStyle="margin-left: 15px">
            基本用法
          </QMButton>
        </Sticky>
      </DemoBlock>

      <DemoBlock title="吸顶距离">
        <Sticky offsetTop={50}>
          <QMButton type="info" customStyle="margin-left: 115px">
            吸顶距离
          </QMButton>
        </Sticky>
      </DemoBlock>

      <DemoBlock title="指定容器">
        <View id="container" style="height: 150px; background-color: red;">
          <Sticky container={container}>
            <QMButton type="warning" customStyle="margin-left: 215px">
              指定容器
            </QMButton>
          </Sticky>
        </View>
      </DemoBlock>
    </View>
  );
}
