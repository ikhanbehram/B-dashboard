import react from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>Home Screen</Text>
            <Button title="OPEN" onPress={props.navigation.openDrawer} />
        </View>
    );
};

export default HomeScreen;
