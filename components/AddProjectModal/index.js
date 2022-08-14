import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import SelectCreateable from "../SelectCreateable";

function AddProjectModal({ isVisible, onCancel, onAddProject }) {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.imageBtn}>
                    <Button title="Select Image" onPress={pickImage} />
                </View>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
