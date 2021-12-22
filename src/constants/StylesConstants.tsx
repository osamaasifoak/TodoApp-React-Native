import {
    StyleSheet,
} from "react-native";
import { colorConstants } from "./ColorConstants";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorConstants.white,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: colorConstants.inputBackground,
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    margingTop15: {
        marginTop: 15,
    },
    title: {
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 'bold'
    },
    lgnTxt: {
        fontSize: 18,
        color: colorConstants.white,
        fontWeight: '600'
    },
    accSignInSignup:  {
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 20
    },

    btn: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorConstants.btnBackground,
    },
});