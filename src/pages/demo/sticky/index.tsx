import { View, Text, ScrollView } from "@tarojs/components";
import DemoBlock from "../components/demo-block";
import Sticky from "ui-base/sticky";
import QMButton from "ui-base/button";

import "./index.module.less";

export default function StickyDemo() {
  return (
    <View>
      <DemoBlock title="基本用法">
        <Sticky>
          <QMButton type="primary" customStyle="margin-left: 15px">
            基本用法
          </QMButton>
        </Sticky>
      </DemoBlock>
    </View>
  );
}
