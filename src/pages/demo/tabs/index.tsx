import { View, Block } from "@tarojs/components";
import { useState } from "@tarojs/taro";
import Tabs from "ui-base/tabs";
import Tab from "ui-base/tab";

import DemoBlock from "../components/demo-block/index";

export default function TabsPage() {
  const [active, setActive] = useState<string | number>("1");
  return (
    <Block>
      <DemoBlock title="基础用法">
        <Tabs
          onClick={data => {
            console.log("onClick data....", data);
            setActive(data.name);
          }}
          onChange={data => {
            console.log("onChange data....", data);
            setActive(data.name);
          }}
          tabs={[
            {
              title: "tab1",
              name: "1"
            },
            {
              title: "tab2",
              name: "2"
            }
          ]}
          active={active}
        >
          <Tab name="1" active={active}>
            tab item1
          </Tab>
          <Tab name="2" active={active}>
            tab item2
          </Tab>
          <Tab name="3" active={active}>
            tab item3
          </Tab>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="横向滚动">
        <Tabs
          onClick={data => {
            console.log("onClick data....", data);
            setActive(data.name);
          }}
          onChange={data => {
            console.log("onChange data....", data);
            setActive(data.name);
          }}
          tabs={[
            {
              title: "tab1",
              name: "1"
            },
            {
              title: "tab2",
              name: "2"
            },
            {
              title: "tab3",
              name: "3"
            },
            {
              title: "tab4",
              name: "4"
            },
            {
              title: "tab5",
              name: "5"
            },
            {
              title: "tab6",
              name: "6"
            }
          ]}
          active={active}
        >
          <Tab name="1" active={active}>
            tab item1
          </Tab>
          <Tab name="2" active={active}>
            tab item2
          </Tab>
          <Tab name="3" active={active}>
            tab item3
          </Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title="禁用标签">
        <Tabs
          onClick={data => {
            console.log("onClick data....", data);
            setActive(data.name);
          }}
          onChange={data => {
            console.log("onChange data....", data);
            setActive(data.name);
          }}
          onDisabled={data => {
            console.log("onDisabled data....", data);
            // setActive(data.name)
          }}
          tabs={[
            {
              title: "tab1",
              name: "1"
            },
            {
              title: "tab2",
              name: "2",
              disabled: true
            },
            {
              title: "tab3",
              name: "3"
            }
          ]}
          active={active}
        >
          <Tab name="1" active={active}>
            tab item1
          </Tab>
          <Tab name="2" active={active}>
            tab item2
          </Tab>
          <Tab name="3" active={active}>
            tab item3
          </Tab>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="粘性布局">
        <Tabs
          onClick={data => {
            console.log("onClick data....", data);
            setActive(data.name);
          }}
          onChange={data => {
            console.log("onChange data....", data);
            setActive(data.name);
          }}
          onDisabled={data => {
            console.log("onDisabled data....", data);
            // setActive(data.name)
          }}
          sticky
          tabs={[
            {
              title: "tab1",
              name: "1"
            },
            {
              title: "tab2",
              name: "2",
              disabled: true
            },
            {
              title: "tab3",
              name: "3"
            }
          ]}
          active={active}
        >
          <Tab name="1" active={active}>
            tab item1
          </Tab>
          <Tab name="2" active={active}>
            tab item2
          </Tab>
          <Tab name="3" active={active}>
            tab item3
          </Tab>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="滑动切换">
        <Tabs
          onClick={data => {
            console.log("onClick data....", data);
            setActive(data.name);
          }}
          onChange={data => {
            console.log("onChange data....", data);
            setActive(data.name);
          }}
          onDisabled={data => {
            console.log("onDisabled data....", data);
            // setActive(data.name)
          }}
          swipeable
          tabs={[
            {
              title: "tab1",
              name: "1"
            },
            {
              title: "tab2",
              name: "2",
              disabled: true
            },
            {
              title: "tab3",
              name: "3"
            }
          ]}
          active={active}
        >
          <Tab name="1" active={active}>
            tab item1
          </Tab>
          <Tab name="2" active={active}>
            tab item2
          </Tab>
          <Tab name="3" active={active}>
            tab item3
          </Tab>
        </Tabs>
      </DemoBlock>

      <View style="height: 600px">hh</View>
    </Block>
  );
}

TabsPage.options = {
  addGlobalClass: true
};
