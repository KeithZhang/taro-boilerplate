import { View } from "@tarojs/components";
import { Config, ComponentOptions } from "@tarojs/taro";

import Menu from "./components/menu";

const Home = () => {
  return (
    <View>
      <Menu />
    </View>
  );
};

Home.config = {
  navigationBarTitleText: "首页"
} as Config;

Home.options = {
  addGlobalClass: true
} as ComponentOptions;

export default Home;
