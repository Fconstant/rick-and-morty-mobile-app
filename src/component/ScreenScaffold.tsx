import React from "react";
import { Layout, TopNavigation, Divider, useTheme, Icon, Toggle } from "@ui-kitten/components";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

export interface ScreenScaffoldProps {
  title: string;
}

const ScreenScaffold: React.FC<ScreenScaffoldProps> = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{ height: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}
      />
      <TopNavigation
        title={props.title}
        alignment="center"
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {props.children}
      </Layout>
    </SafeAreaView>
  );
}
export default ScreenScaffold;
