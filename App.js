/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, WebView, ActivityIndicator } from "react-native";

export default class App extends Component<{}> {
  render() {
    return (
      <WebView
        source={{ uri: "https://vplus.vienthonga.vn" }}
        style={styles.container}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.renderActivityIndicatorLoadingView}
        startInLoadingState={true}
        mixedContentMode="always"
        scalesPageToFit
      />
    );
  }

  renderActivityIndicatorLoadingView = () => {
    return (
      <ActivityIndicator size="large" style={styles.activityIndicatorStyle} />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : 0
  },

  activityIndicatorStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
