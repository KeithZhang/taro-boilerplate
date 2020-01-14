"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const redux_1 = require("@tarojs/redux");
function Order() {
    const order = redux_1.useSelector((state) => state.order);
    return <components_1.View>this is order page</components_1.View>;
}
exports.default = Order;
//# sourceMappingURL=index.jsx.map