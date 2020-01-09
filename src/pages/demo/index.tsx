import { View, Button } from "@tarojs/components";

export default function Demo() {
  return (
    <View>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/overlay/index"
          });
        }}
      >
        overlay
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/transition/index"
          });
        }}
      >
        transition
      </Button>

      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/popup/index"
          });
        }}
      >
        popup
      </Button>

      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/icon/index"
          });
        }}
      >
        icon
      </Button>

      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/tabbar/index"
          });
        }}
      >
        tabbar
      </Button>

      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/loading/index"
          });
        }}
      >
        loading
      </Button>
    </View>
  );
}
