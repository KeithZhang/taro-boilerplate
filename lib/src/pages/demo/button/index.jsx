"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const demo_block_1 = require("../components/demo-block");
const button_1 = require("ui-base/button");
function ButtonDemo() {
    return (<components_1.View>
      <demo_block_1.default title="按钮类型" padding>
        <button_1.default customStyle="margin: 5px;">默认按钮</button_1.default>
        <button_1.default customStyle="margin: 5px;" type="primary">
          主要按钮
        </button_1.default>
        <button_1.default customStyle="margin: 5px;" type="info">
          信息按钮
        </button_1.default>
        <button_1.default customStyle="margin: 5px;" type="warning">
          警告按钮
        </button_1.default>
        <button_1.default type="danger">危险按钮</button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="朴素按钮" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" plain>
          朴素按钮
        </button_1.default>
        <button_1.default type="info" plain>
          朴素按钮
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="细边框" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" plain hairline>
          细边框按钮
        </button_1.default>
        <button_1.default type="info" plain hairline>
          细边框按钮
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="禁用状态" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" disabled>
          禁用状态
        </button_1.default>
        <button_1.default type="info" disabled>
          禁用状态
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="禁用状态" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" disabled>
          禁用状态
        </button_1.default>
        <button_1.default type="info" disabled>
          禁用状态
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="加载状态" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" loading>
          禁用状态
        </button_1.default>
        <button_1.default customStyle="margin: 5px;" type="primary" loading loadingType="spinner">
          禁用状态
        </button_1.default>
        <button_1.default type="info" loading loadingText="加载中...">
          禁用状态
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="图标按钮" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" icon="star_o"/>
        <button_1.default customStyle="margin: 5px;" type="primary" icon="star_o">
          按钮
        </button_1.default>

        <button_1.default plain type="primary" icon="https://img.yzcdn.cn/vant/logo.png">
          按钮
        </button_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="图标按钮" padding>
        <button_1.default customStyle="margin: 5px;" type="primary" size="large" block>
          大号按钮
        </button_1.default>
        <button_1.default customStyle="margin: 5px;" type="primary">
          普通按钮
        </button_1.default>

        <button_1.default customStyle="margin: 5px;" type="primary" size="small">
          小型按钮
        </button_1.default>
        <button_1.default type="primary" size="mini">
          迷你按钮
        </button_1.default>
      </demo_block_1.default>
    </components_1.View>);
}
exports.default = ButtonDemo;
//# sourceMappingURL=index.jsx.map