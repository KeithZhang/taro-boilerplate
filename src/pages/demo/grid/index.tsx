import Grid from "ui-base/grid";
import { View } from "@tarojs/components";

import css from "./index.module.less";

export default function GridPage() {
  return (
    <View style={{ backgroundColor: "#f0f3f6", height: "100vh" }}>
      <View>默认4格</View>
      <Grid
        items={[
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          }
        ]}
      />

      <View>自定义格数columnName 6</View>
      <Grid
        columnName={6}
        items={[
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          }
        ]}
      />

      <View>自定义边距 gutter 10</View>
      <Grid
        gutter={10}
        items={[
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          },
          {
            icon: "photo_o",
            text: "文字"
          }
        ]}
      />
    </View>
  );
}
