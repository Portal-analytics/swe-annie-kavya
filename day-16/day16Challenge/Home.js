import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
  },
  textbox: {
    flexDirection: "row",
    width: window.width,
    margin: 10,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  displayText: {
    padding: 10,
    fontSize: 14
  }
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.welcome}>
        <Text>HELLO FROM HOME PAGE</Text>
        <TextApp />
      </View>
    );
  }
}

export class TextApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", textList: [] };
  }

  onSubmit = text => {
    var textToAdd = text;
    var newtextList = this.state.textList.slice(0);
    newtextList = newtextList.concat([textToAdd]);
    this.setState({
      textList: newtextList,
      text: ""
    });
  };

  render() {
    return (
      <View style={{ padding: 10, flexDirection: "column" }}>
        <Text style={styles.displayText}>
          {this.state.textList.map(textToDisplay => textToDisplay + "\n")}
        </Text>
        <View style={styles.textbox}>
          <View style={{ flex: 4 }}>
            <TextInput
              style={{
                height: 40,
                borderColor: "black",
                backgroundColor: "transparent"
              }}
              onChangeText={text => {
                this.setState({ ...this.state, text: text });
              }}
              onSubmitEditing={() => {
                this.onSubmit(...this.state, this.state.text);
              }}
              placeholder="Type here!"
            />
          </View>
          <View>
            <Button
              title="send"
              onPress={() => this.onSubmit(this.state.text)}
            />
          </View>
        </View>
      </View>
    );
  }
}
