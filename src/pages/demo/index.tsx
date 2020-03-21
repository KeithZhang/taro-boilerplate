import { View, Button } from "@tarojs/components";

export default function Demo() {
  return (
    <View>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/action-sheet/index"
          });
        }}
      >
        action-sheet
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/grid/index"
          });
        }}
      >
        grid
      </Button>
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

      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/button/index"
          });
        }}
      >
        button
      </Button>
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/demo/sticky/index"
          });
        }}
      >
        sticky
      </Button>
    </View>
  );
}
