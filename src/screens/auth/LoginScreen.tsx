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
import { stringsConstants } from "../../constants/StringsConstants";
import { styles } from "../../constants/StylesConstants";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{stringsConstants.appName}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.email}
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.password}
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.lgnTxt}>{stringsConstants.login}</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.forgot_button}>{stringsConstants.forgotPassword}</Text>
            </TouchableOpacity>

        </View>
    );
}



export default LoginScreen;