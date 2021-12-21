import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { stringsConstants } from "../constants/StringsConstants";
import { styles } from "../constants/StylesConstants";
import { navigate } from "../routes/RootNavigation";
import { RoutesEnum } from "../routes/RoutesEnum";
import { AuthStackParamList } from "../routes/Types";
function SplashScreen() {
    const { navigate } = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // navigate();
        }, 1000)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{stringsConstants.appName}</Text>
        </View>
    );
}

export default SplashScreen;