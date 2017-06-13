import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Note from "./Note";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: "lightblue",
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  },
  textInput: {
    color: "#fff",
    padding: 20,
    paddingTop: 46,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  }
});

export default class Home extends Component {
  state = {
    noteArray: [{ date: "", note: "" }],
    noteText: ""
  };
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Home </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Message"
          />
        </View>

      </View>
    );
  }
  addNote = () => {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear(),
        note: this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  };

  deleteNote = key => {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  };
}
