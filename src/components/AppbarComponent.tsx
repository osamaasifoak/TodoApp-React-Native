import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorConstants } from "../constants/ColorConstants";
import { stringsConstants } from "../constants/StringsConstants";
import { MyStatusBar } from "./StatusBarComponent";
import auth from '@react-native-firebase/auth';

export const AppbarComponent = () => (
    <>
        <MyStatusBar backgroundColor={colorConstants.primary} barStyle="light-content" />
        <View style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: colorConstants.primary,
            padding: 15,
            marginBottom: 10
        }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: colorConstants.white }}>
                {stringsConstants.todoList}
            </Text>
            <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={async()=>auth().signOut()}>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: colorConstants.white }}>
                        {stringsConstants.signout}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
)