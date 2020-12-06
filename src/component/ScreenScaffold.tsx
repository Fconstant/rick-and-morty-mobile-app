import React from "react";
import {
  Layout,
  TopNavigation,
  Divider,
} from "@ui-kitten/components";
import { Platform, StatusBar, View } from "react-native";

export interface ScreenScaffoldProps {
  title: string;
}

const ScreenScaffold: React.FC<ScreenScaffoldProps> = (props) => {
  return (
    <>
      <View
        style={{
          height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      />
      <TopNavigation title={props.title} alignment="center" />
      <Divider />
      <Layout
        level="2"
        style={{ height: '100%', flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {props.children}
      </Layout>
    </>
  );
};
export default ScreenScaffold;
