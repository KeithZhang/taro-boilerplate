import QMToast from "ui-base/toast";
import QMToastHelp from "ui-base/toast/help";
import QMButton from "ui-base/button";
import { View } from "@tarojs/components";

export default function GridPage() {
  return (
    <View style={{ backgroundColor: "#f0f3f6", height: "100vh" }}>
      <QMButton onClick={() => QMToastHelp.toast("我是个提示框")}>默认</QMButton>
      <QMButton onClick={() => QMToastHelp.success("请求成功")}>成功</QMButton>
      <QMButton onClick={() => QMToastHelp.show({ text: "我永久不关闭", duration: 0 })}>永久不关闭</QMButton>

      <QMToast id="van-toast" />
    </View>
  );
}
