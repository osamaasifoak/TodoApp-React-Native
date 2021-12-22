import firestore from '@react-native-firebase/firestore';

export class TodoServices {
    ref = firestore().collection('todos');
}
