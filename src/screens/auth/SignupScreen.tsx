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
import { styles } from "../../constants/StylesConstants";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO APP</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.lgnTxt}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

        </View>
    );
}


export default LoginScreen;