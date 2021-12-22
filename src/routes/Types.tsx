import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesEnum } from "./RoutesEnum"

export type AuthStackParamList = {
    [RoutesEnum.Splash]: undefined,
    [RoutesEnum.Signin]: undefined,
    [RoutesEnum.Signup]: undefined,
    // FORGOT_PASSWORD: undefined
}

export type RootStackParamList = {
    [RoutesEnum.Todos]: undefined
}


// export type SigninRouteProp = RouteProp<AuthStackParamList, RoutesEnum.Signin>;
// export type SigninNavigationProp = StackNavigationProp<AuthStackParamList, RoutesEnum.Signin>;
// export type SigninProps = {
// 	route: SigninRouteProp;
// 	navigation: SigninNavigationProp;
// };