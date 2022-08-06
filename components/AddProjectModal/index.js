import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
// import SelectCreateable from "../SelectCreateable";

function AddProjectModal({ isVisible, onCancel, onAddProject }) {
    const launchImage = () => {
        launchImageLibrary();
    };
    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.imageBtn}>
                    <Button title="Select Image" onPress={launchImage} />
                </View>
                <TextInput style={styles.textInput} placeholder="Project Title" />
                <TextInput style={styles.textInput} placeholder="Project Description" multiline numberOfLines={5} />
                {/* <SelectCreateable /> */}

                <TextInput style={styles.textInput} placeholder="Project Title" />
                <TextInput style={styles.textInput} placeholder="Project Title" />
                <TextInput style={styles.textInput} placeholder="Project Title" />
                <TextInput style={styles.textInput} placeholder="Project Title" />
                <TextInput style={styles.textInput} placeholder="Project Title" />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Project" onPress={onAddProject} color="limegreen" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AddProjectModal;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 12,
        marginVertical: 8
    },

    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: "40%",
        marginHorizontal: 35
    },
    imageBtn: {
        alignSelf: "flex-start",
        paddingBottom: 10
    }
});
