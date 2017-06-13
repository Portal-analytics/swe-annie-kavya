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
    margin: 10
  },
  message: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.message}>
          HELLO {this.props.name}

        </Text>
      </View>
    );
  }
}
