"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overlay_1 = require("ui-base/overlay");
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
function OverlayPage() {
    const [show, setShow] = taro_1.useState(false);
    return (<components_1.View>
      <components_1.Button onClick={() => {
        setShow(!show);
    }}>
        显示
      </components_1.Button>
      <overlay_1.default show={show} onClick={() => {
        setShow(!show);
    }}></overlay_1.default>
    </components_1.View>);
}
exports.default = OverlayPage;
//# sourceMappingURL=index.jsx.map