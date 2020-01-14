"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const useAuth_1 = require("hooks/useAuth");
function Home() {
    const permission = useAuth_1.default();
    return (<components_1.View>
      {permission ? (<components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/home/edit"
        });
    }}>
          运营
        </components_1.Button>) : null}
      {permission ? (<components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/home/edit"
        });
    }}>
          编辑
        </components_1.Button>) : null}
    </components_1.View>);
}
exports.default = Home;
Home.config = {
    navigationBarTitleText: "首页"
};
Home.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.jsx.map