import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { colorConstants } from "../../constants/ColorConstants";
import { stringsConstants } from "../../constants/StringsConstants";
import { styles } from "../../constants/StylesConstants";

function AddTodosScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Todos</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.email}
                    placeholderTextColor={colorConstants.placeHolderText}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.password}
                    placeholderTextColor={colorConstants.placeHolderText}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.lgnTxt}>{stringsConstants.login}</Text>
            </TouchableOpacity>
        </View>
    );
}



export default AddTodosScreen;