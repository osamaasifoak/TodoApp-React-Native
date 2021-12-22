import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { ErrorConstants } from '../constants/ErrorConstants';
import { Todo } from '../screens/todos/TodosScreen';

const ref = firestore().collection('todos');


export async function addTodo(todo: string, userId: string, setTodo: any) {
    if (todo) {
        await ref.add({
            title: todo,
            userId: userId,
            complete: false,
        });
        setTodo('');
    } else {
        Snackbar.show({
            text: "Todo " + ErrorConstants.emptyField,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
}

export async function toggleComplete(todo: Todo) {
    if (!todo.complete) {
        await firestore()
            .collection('todos')
            .doc(todo.id)
            .update({
                complete: !todo.complete,
            });
    }
    else {
        Snackbar.show({
            text: "Already mark completed",
            duration: Snackbar.LENGTH_SHORT,
        });
    }
}
export async function updateTodoFir(todo: Todo, setUpdateTodo: any) {
    console.log(todo)
    if (todo.title != "") {
        await firestore()
            .collection('todos')
            .doc(todo.id)
            .update({
                title: todo.title,
            });
        setUpdateTodo(undefined)
    }
    else {
        Snackbar.show({
            text: "Todo " + ErrorConstants.emptyField,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
}

export async function deleteTodo(todo: Todo) {
    await firestore()
        .collection('todos')
        .doc(todo.id).delete();
}

