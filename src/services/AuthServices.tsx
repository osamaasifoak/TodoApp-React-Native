import auth from '@react-native-firebase/auth';
import { CommonStatusWrapper } from '../models/CommonStatusModel';

export class AuthServices {

  static  login = async (email: string, Password: string): Promise<CommonStatusWrapper> => {
        try {
            await auth()
                .createUserWithEmailAndPassword(email, Password);
            return new CommonStatusWrapper(true, "User account created & signed in!")
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                return new CommonStatusWrapper(false, 'That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                return new CommonStatusWrapper(false, 'That email address is invalid!')
            }
        }
        return new CommonStatusWrapper(false, 'Something went wrong')
    }


}