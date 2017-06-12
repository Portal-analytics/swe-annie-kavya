import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import Profile from "./Profile";
import { NativeRouter, Route, Link } from "react-router-native";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "gray",
    padding: 20
  }
});

export default class Menu extends React.Component {
  render() {
    return (
      <NativeRouter>
        <ScrollView style={styles.menu}>
          <Link to="/profile">
            <Text>
              Profile
            </Text>
          </Link>
          <Route path="/profile" component={Profile} />
        </ScrollView>
      </NativeRouter>
    );
  }
}
