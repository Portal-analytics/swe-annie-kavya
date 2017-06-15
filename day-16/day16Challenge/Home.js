import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import firebaseData from "./firebaseconfig";
import * as firebase from "firebase";
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
    this.state = {
      text: "",
      textList: []
    };
  }

  onSubmit = text => {
    var date = new Date().toTimeString().slice(0, 5);

    var newtextList = this.state.textList;
    console.log("nexttextList");
    console.log(newtextList);
    newtextList.push({
      quote: text,
      date: date,
      name: "kavya-annie"
    });
    firebase.database().ref("/kavya-annie").set({
      quotes: newtextList
    });
    var readData = firebase.database().ref("/kavya-annie");
    readData.on("value", snapshot => {
      if (snapshot.val() === null) {
        this.setState({
          ...this.state,
          textList: []
        });
      } else {
        this.setState({
          ...this.state,
          textList: snapshot.val().quotes
        });
      }
    });
  };

  render() {
    console.log(this.state.textList);
    return (
      <View style={styles.container}>
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
        <ScrollView style={styles.chatwindow}>
          <View style={styles.displayText}>
            {this.state.textList !== null &&
              this.state.textList.map(textToDisplay => {
                return (
                  <View>
                    <Text> {textToDisplay.quote} </Text>
                    <Text> {textToDisplay.date} </Text>
                    <Text> {textToDisplay.name} </Text>
                  </View>
                );
              })}

          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "column"
  },
  chatwindow: {
    borderWidth: 4,
    borderColor: "#888",
    borderRadius: 10
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
