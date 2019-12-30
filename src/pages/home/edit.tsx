import { View, Button } from "@tarojs/components";
import { Config, ComponentOptions } from "@tarojs/taro";
import useAuth from "hooks/useAuth";
import MenuEdit from "./components/menu/edit";

const HomeEdit = () => {
  const permission = useAuth();
  return (
    <View>
      <MenuEdit />
      {permission ? <Button>保存</Button> : null}
    </View>
  );
};

HomeEdit.config = {
  navigationBarTitleText: "首页"
} as Config;

HomeEdit.options = {
  addGlobalClass: true
} as ComponentOptions;

export default HomeEdit;
