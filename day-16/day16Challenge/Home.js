import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.welcome}>
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
    var date = new Date().toTimeString().slice(0, 5);
    var textToAdd = text;
    var newtextList = this.state.textList.slice(0);
    newtextList = newtextList.concat([textToAdd]);
    this.setState({
      textList: newtextList,
      currentDate: date,
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.chatwindow}>
          <Text style={styles.displayText}>
            {this.state.textList.map(
              textToDisplay =>
                textToDisplay + " " + this.state.currentDate + "\n"
            )}
          </Text>
        </ScrollView>
        <View style={styles.footer}>
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
                placeholder="Type here"
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    // alignItems: "center",
    padding: 10,
    flexDirection: "column"
  },
  chatwindow: {
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10
  },
  // footer: {
  //   justifyContent: "space-between"
  // },
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
