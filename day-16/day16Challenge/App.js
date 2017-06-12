import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SideMenu from "react-native-side-menu";
import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import Settings from "./Settings";
import Home from "./Home";
import Menu from "./Menu";

const menu = <Menu />;
export default class App extends Component {
  render() {
    return (
      <SideMenu menu={menu}>
        <View>
          <Nav />
          <Text> hello </Text>
        </View>
      </SideMenu>
    );
  }
}

class SideMenuBar extends React.Component {
  render() {
    return <View />;
  }
}

class Nav extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <NavBar>
            <NavButton onPress={() => <Link to="/settings" />}>
              <NavButtonText>
                {"Settings"}
              </NavButtonText>
            </NavButton>

            <NavButton onPress={() => <Link to="/home" />}>

              <Text>
                {"Home"}
              </Text>

            </NavButton>

          </NavBar>
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  sidebar: {
    backgroundColor: "green"
  },
  navbar: {
    backgroundColor: "#F5FCFF"
  }
});
