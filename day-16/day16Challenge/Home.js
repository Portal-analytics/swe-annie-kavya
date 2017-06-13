import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.welcome}>
        <Text>HELLO FROM HOME PAGE</Text>
      </View>
    );
  }
}
