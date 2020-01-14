"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const header_1 = require("./header");
const bottom_1 = require("./bottom");
const edit_1 = require("./menu/edit");
const components_1 = require("@tarojs/components");
function Container(props) {
    console.log("props...", props);
    return (props.moduleList &&
        props.moduleList.map((v, i) => {
            let result;
            switch (v.id) {
                case 1: {
                    result = <header_1.default />;
                }
                case 2: {
                    result = <bottom_1.default />;
                }
                case 3: {
                    result = <edit_1.default />;
                }
            }
            return (<components_1.View key={v.id} onClick={() => {
                console.log("container...", i);
            }}>
          {result}
        </components_1.View>);
        }));
}
exports.default = Container;
//# sourceMappingURL=container.jsx.map