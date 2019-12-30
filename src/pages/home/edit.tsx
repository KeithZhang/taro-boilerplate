import { View, Button, Text } from "@tarojs/components";
import { Config, ComponentOptions } from "@tarojs/taro";
import useAuth from "hooks/useAuth";

const HomeEdit = () => {
  const permission = useAuth();
  return (
    <View>
      <Text className="iconfont icon-plus-solid" />
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
