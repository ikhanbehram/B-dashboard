import { View, Text, StyleSheet } from "react-native";

function IntroScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Intro Screen</Text>
        </View>
    );
}

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
