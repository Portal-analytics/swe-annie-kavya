import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SideMenu from "react-native-side-menu";
// import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import Settings from "./Settings";
import Home from "./Home";
import Menu from "./Menu";
// import settingpicture from "./settings.png";

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
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
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
        <View style={styles.nav}>
          <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text> Home </Text>
          </Link>
          <Link to="/settings" underlayColor="#f0f4f7" style={styles.navItem}>
            <View>
              <Button>
                {/*<Image source={require(settingpicture)} />*/}
              </Button>
            </View>
          </Link>
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
