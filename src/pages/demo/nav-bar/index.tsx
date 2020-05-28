import { View, Text } from "@tarojs/components";
import NavBar from "ui-base/nav-bar";

export default function NavBarDemo() {
  return (
    <View>
      <NavBar
        leftText="返回"
        rightText="按钮"
        leftArrow
        renderTitle={() => <Text>custom title</Text>}
        onClickLeft={() => {
          console.log("onClickLeft...");
        }}
        onClickRight={() => {
          console.log("onClickRight...");
        }}
      ></NavBar>
    </View>
  );
}
