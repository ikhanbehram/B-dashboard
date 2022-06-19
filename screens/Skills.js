import { View, Text, StyleSheet } from "react-native";

function SkillsScreen() {
    return (
        <View style={styles.container}>
            <Text>Skills Screen</Text>
        </View>
    );
}

export default SkillsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
