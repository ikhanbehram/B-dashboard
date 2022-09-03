import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function SkillsScreen() {
    const addSkill = () => {};
    return (
        <>
            <View style={styles.container}>
                <View style={styles.skillContainer}>
                    <View style={styles.skill}>
                        <Text style={{ ...styles.cardText, color: "white" }}>Node</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{ ...styles.cardText, color: "white" }}>Express</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{ ...styles.cardText, color: "white" }}>React</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{ ...styles.cardText, color: "white" }}>SQL</Text>
                    </View>
                    <View style={styles.skill}>
                        <Text style={{ ...styles.cardText, color: "white" }}>Angular</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacityStyle} onPress={addSkill}>
                        <Ionicons name="ios-add" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default SkillsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 10
    },
    skillContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    skill: {
        backgroundColor: "tomato",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 2
    },
    cardText: {
        fontSize: 20,
        color: "tomato",
        fontWeight: "bold"
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
