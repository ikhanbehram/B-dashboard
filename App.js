import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/Home";
import ProjectsScreen from "./screens/Projects";
import SkillsScreen from "./screens/Skills";
import IntroScreen from "./screens/Intro";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Intro" component={IntroScreen} />
            <Drawer.Screen name="Projects" component={ProjectsScreen} />
            <Drawer.Screen name="Skills" component={SkillsScreen} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}
