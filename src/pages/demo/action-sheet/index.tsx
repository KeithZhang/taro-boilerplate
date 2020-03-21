import ActionSheet from "ui-base/action-sheet";
import QMButton from "ui-base/button";
import { View } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function GridPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(true);
  return (
    <View style={{ backgroundColor: "#f0f3f6", height: "100vh" }}>
      <QMButton onClick={() => setShow1(true)}>默认</QMButton>
      <ActionSheet
        show={show1}
        actions={[
          {
            name: "AAAA"
          }
        ]}
        onClose={() => {
          setShow1(false);
        }}
        onSelect={(action) => {
          console.log(action);
        }}
      />

      <QMButton onClick={() => setShow2(true)}>自定义问题颜色和去掉取消</QMButton>
      <ActionSheet
        show={show2}
        cancelText={false}
        actions={[
          {
            name: "AAAA",
            color: "#00ffff"
          }
        ]}
        onClose={() => {
          setShow2(false);
        }}
        onSelect={(action) => {
          console.log(action);
        }}
      />
    </View>
  );
}
