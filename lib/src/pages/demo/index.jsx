"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
function Demo() {
    return (<components_1.View>
      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/overlay/index"
        });
    }}>
        overlay
      </components_1.Button>
      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/transition/index"
        });
    }}>
        transition
      </components_1.Button>

      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/popup/index"
        });
    }}>
        popup
      </components_1.Button>

      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/icon/index"
        });
    }}>
        icon
      </components_1.Button>

      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/tabbar/index"
        });
    }}>
        tabbar
      </components_1.Button>

      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/loading/index"
        });
    }}>
        loading
      </components_1.Button>

      <components_1.Button onClick={() => {
        Taro.navigateTo({
            url: "/pages/demo/button/index"
        });
    }}>
        button
      </components_1.Button>
    </components_1.View>);
}
exports.default = Demo;
//# sourceMappingURL=index.jsx.map