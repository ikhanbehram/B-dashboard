import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
// import HomeScreen from "./screens/Home";
import IntroScreen from "./screens/Intro";
import ProjectScreen from "./screens/Projects";
import SkillsScreen from "./screens/Skills";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button onPress={() => navigation.navigate("Notifications")} title="Go to notifications" />
        </View>
    );
}
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
                    <Drawer.Screen name="Projects" component={ProjectScreen} />
                    <Drawer.Screen name="Skills" component={SkillsScreen} />
                    <Drawer.Screen name="Intro" component={IntroScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0000",
        alignItems: "center",
        justifyContent: "center"
    }
});
