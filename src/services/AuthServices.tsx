import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import { CommonStatusWrapper } from '../models/CommonStatusModel';

export class AuthServices {

    static login = async (email: string, Password: string) => {
        try {
            await auth()
                .signInWithEmailAndPassword(email, Password);
            Snackbar.show({
                text: "signed in!",
                duration: Snackbar.LENGTH_SHORT,
            });
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                Snackbar.show({
                    text: 'That email address is already in use!',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Snackbar.show({
                    text: 'That email address is invalid!',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }
    }
    static createAccount = async (email: string, Password: string) => {
        try {
            await auth()
                .createUserWithEmailAndPassword(email, Password);
            Snackbar.show({
                text: "User account created & signed in!",
                duration: Snackbar.LENGTH_SHORT,
            });
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                Snackbar.show({
                    text: 'That email address is already in use!',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Snackbar.show({
                    text: 'That email address is invalid!',
                    duration: Snackbar.LENGTH_SHORT,
                });
            }
        }
    }


}