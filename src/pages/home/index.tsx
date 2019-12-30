import { View, Button } from "@tarojs/components";
import { Config, ComponentOptions } from "@tarojs/taro";
import useAuth from "hooks/useAuth";
import Menu from "./components/menu";

export default function Home() {
  const permission = useAuth();

  return (
    <View>
      <Menu onClick={() => {}} />
      {permission ? (
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/home/edit"
            });
          }}
        >
          运营
        </Button>
      ) : null}
      {permission ? (
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/home/edit"
            });
          }}
        >
          编辑
        </Button>
      ) : null}
    </View>
  );
}

Home.config = {
  navigationBarTitleText: "首页"
} as Config;

Home.options = {
  addGlobalClass: true
} as ComponentOptions;
