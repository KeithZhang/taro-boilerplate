"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const redux_1 = require("@tarojs/redux");
function Goods() {
    const goods = redux_1.useSelector((state) => state.goods);
    return <components_1.View>this is goods page</components_1.View>;
}
exports.default = Goods;
//# sourceMappingURL=index.jsx.map