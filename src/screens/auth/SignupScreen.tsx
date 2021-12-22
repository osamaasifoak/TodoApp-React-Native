import { CommonActions, useNavigation } from "@react-navigation/native";
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
import Snackbar from "react-native-snackbar";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { stringsConstants } from "../../constants/StringsConstants";
import { styles } from "../../constants/StylesConstants";
import { RoutesEnum } from "../../routes/RoutesEnum";
import { AuthServices } from "../../services/AuthServices";

function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const navigate = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: RoutesEnum.Signin }],
            }),
        );
    };
    const validateAndSubmitForm = async () => {
        if (email == "") {
            Snackbar.show({
                text: "Email " + ErrorConstants.emptyField,
                duration: Snackbar.LENGTH_SHORT,
            });
        }
        else if (password == "") {
            Snackbar.show({
                text: "Password " + ErrorConstants.emptyField,
                duration: Snackbar.LENGTH_SHORT,
            });

        } else {
            await AuthServices.createAccount(email, password)

        }
    }
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

            <TouchableOpacity style={styles.btn} onPress={validateAndSubmitForm}>
                <Text style={styles.lgnTxt}>{stringsConstants.signup}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigate}>
                <Text style={[styles.margingTop15, styles.accSignInSignup]}>{stringsConstants.signinNow}</Text>
            </TouchableOpacity>

        </View>
    );
}


export default SignupScreen;