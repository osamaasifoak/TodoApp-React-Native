import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/SigninScreen";
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
                name="SIGN_IN"
                component={SigninScreen}
                // name= "INTRO_LAST"
                // component={LastScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}