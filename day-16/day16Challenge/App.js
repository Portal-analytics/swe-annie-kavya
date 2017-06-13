import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Navigator
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SideMenu from "react-native-side-menu";
// import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import Settings from "./Settings";
import Home from "./Home";
import Menu from "./Menu";
import settingpicture from "./settings.png";

const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

export default class App extends Component {
  state = {
    isOpen: false
  };

  updateMenuState = isOpen => {
    this.setState({ isOpen });
  };

  onMenuItemSelected = item => {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedItem: item
    });
  };
  render() {
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Nav />
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
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text> Home </Text>
            </Link>

            <Link to="/settings" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>
                <Image
                  source={settingpicture}
                  style={{ width: 32, height: 32 }}
                />
              </Text>
            </Link>

          </View>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  sidebar: {
    backgroundColor: "green"
  },

  nav: {
    marginTop: 25,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },

  navbar: {
    backgroundColor: "#F5FCFF"
  },

  welcome: {
    textAlign: "center"
  }
});
