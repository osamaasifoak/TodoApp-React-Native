import React from "react";
import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import SplashScreen from "../screens/SplashScreen";
import { RoutesEnum } from "./RoutesEnum";
import { AuthStackParamList } from "./Types";

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name={RoutesEnum.Splash}
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={RoutesEnum.Signin}
                component={SigninScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                  name={RoutesEnum.Signup}
                component={SignupScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;