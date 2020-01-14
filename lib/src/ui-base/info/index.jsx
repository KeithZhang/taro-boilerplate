"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const useBem_1 = require("../hooks/useBem");
function Info(props) {
    const { bem } = useBem_1.default(index_module_less_1.default);
    return (<components_1.Block>
      {(props.info !== null && props.info !== "") || props.dot ? (<components_1.View className={`custom-class ${index_module_less_1.default.van_info} ${bem("info", {
        dot: props.dot
    })}`} style={props.customStyle}>
          {props.dot ? "" : props.info}
        </components_1.View>) : null}
    </components_1.Block>);
}
exports.default = Info;
Info.defaultProps = {
    info: "",
    dot: false
};
Info.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map