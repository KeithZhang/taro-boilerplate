"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const demo_block_1 = require("../components/demo-block");
const loading_1 = require("ui-base/loading");
const index_module_less_1 = require("./index.module.less");
function LoadingPage() {
    return (<components_1.View>
      <demo_block_1.default title="加载类型" padding>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading}/>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading} type="spinner"/>
      </demo_block_1.default>
      <demo_block_1.default title="自定义颜色" padding>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading} color="#1989fa"/>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading} type="spinner" color="#1989fa"/>
      </demo_block_1.default>
      <demo_block_1.default title="加载文案" padding>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading} size="24px">
          加载中...
        </loading_1.default>
      </demo_block_1.default>
      <demo_block_1.default title="垂直排列" padding>
        <loading_1.default custom-class={index_module_less_1.default.demo_loading} size="24px" vertical>
          加载中...
        </loading_1.default>
      </demo_block_1.default>
    </components_1.View>);
}
exports.default = LoadingPage;
//# sourceMappingURL=index.jsx.map