import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.cards}>
                    <View style={styles.cardsTitle}>
                        <Ionicons name="ios-apps" size={30} style={styles.cardText} />
                        <Text style={styles.cardText}>Projects</Text>
                    </View>
                    <View style={styles.cardCount}>
                        <Text style={{ ...styles.cardText, color: "white" }}>50</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.cards}>
                    <View style={styles.cardsTitle}>
                        <Ionicons name="ios-code" size={30} style={styles.cardText} />
                        <Text style={styles.cardText}>Skills</Text>
                    </View>
                    <View style={styles.cardCount}>
                        <Text style={{ ...styles.cardText, color: "white" }}>50</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cards: {
        width: 350,
        height: 350,
        backgroundColor: "#f9f9f9",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "darkgrey",
        shadowOpacity: 0.1,
        elevation: 20
    },
    cardsTitle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cardText: {
        fontSize: 25,
        color: "tomato",
        fontWeight: "bold",
        margin: 5
    },
    cardCount: {
        backgroundColor: "tomato",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});
