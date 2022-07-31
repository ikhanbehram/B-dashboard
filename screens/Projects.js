import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddProjectModal from "../components/AddProjectModal";

function ProjectsScreen() {
    const [addProjectVisisble, setAddProjectVisible] = useState(false);

    const onCancel = () => {
        setAddProjectVisible(false);
    };
    const addProject = () => {
        setAddProjectVisible(true);
    };
    return (
        <SafeAreaView style={styles.container}>
            <AddProjectModal onAddProject={addProject} isVisible={addProjectVisisble} onCancel={onCancel} />
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacityStyle} onPress={addProject}>
                    <Ionicons name="ios-add" size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ProjectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    },
    textStyle: {
        fontSize: 16,
        textAlign: "center",
        padding: 10
    },
    touchableOpacityStyle: {
        position: "absolute",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        bottom: 15
    }
});
