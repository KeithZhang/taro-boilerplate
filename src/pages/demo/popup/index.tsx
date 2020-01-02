import { View, Button } from "@tarojs/components";

import Popup from "ui-base/popup";
import { useState } from "@tarojs/taro";

export default function PopupPage() {
  const [state, setState] = useState({
    basic: false,
    top: false
  });

  return (
    <View>
      <Button
        onClick={() => {
          setState(preState => ({ ...preState, basic: !state.basic }));
        }}
      >
        展示弹出层
      </Button>
      <Popup
        show={state.basic}
        customStyle={"padding: 30px 50px"}
        onClose={() => {
          setState(preState => ({ ...preState, basic: !state.basic }));
        }}
      >
        <View style={"background-color: red; display: flex; flex: 1"}>
          内容
        </View>
      </Popup>

      <Button
        onClick={() => {
          setState(preState => ({ ...preState, top: !state.top }));
        }}
      >
        顶部弹出
      </Button>
      <Popup
        show={state.top}
        customStyle={"height: 20%"}
        position="top"
        onClose={() => {
          setState(preState => ({ ...preState, top: !state.top }));
        }}
      />
    </View>
  );
}
