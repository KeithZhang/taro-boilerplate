import Overlay from "ui-base/overlay";
import { View, Button } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function OverlayPage() {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        显示
      </Button>
      <Overlay
        show={show}
        onClick={() => {
          setShow(!show);
        }}
      ></Overlay>
    </View>
  );
}
