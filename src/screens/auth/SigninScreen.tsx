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
import { colorConstants } from "../../constants/ColorConstants";
import { ErrorConstants } from "../../constants/ErrorConstants";
import { stringsConstants } from "../../constants/StringsConstants";
import { styles } from "../../constants/StylesConstants";
import { CommonStatusWrapper } from "../../models/CommonStatusModel";
import { AuthServices } from "../../services/AuthServices";

function SigninScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
           await AuthServices.login(email, password)
            
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{stringsConstants.appName}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    autoCorrect={false}
                    placeholder={stringsConstants.email}
                    placeholderTextColor={colorConstants.placeHolderText}
                    onChangeText={(email) => setEmail(email)}

                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    autoCorrect={false}
                    placeholder={stringsConstants.password}
                    placeholderTextColor={colorConstants.placeHolderText}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.btn} onPress={validateAndSubmitForm}>
                <Text style={styles.lgnTxt}>{stringsConstants.login}</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={styles.margingTop15}>{stringsConstants.forgotPassword}</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={[styles.margingTop15, styles.accSignInSignup]}>
                    {stringsConstants.signUpNow}</Text>
            </TouchableOpacity>
        </View>
    );
}



export default SigninScreen;