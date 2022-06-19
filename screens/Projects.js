import { View, Text, Button, StyleSheet } from "react-native";

function ProjectsScreen() {
    return (
        <View style={styles.container}>
            <Text>Projects Screen</Text>
        </View>
    );
}

export default ProjectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
