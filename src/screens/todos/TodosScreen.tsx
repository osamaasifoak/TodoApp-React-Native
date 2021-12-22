import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";
import Snackbar from "react-native-snackbar";
import { ErrorConstants } from "../../constants/ErrorConstants";
import auth from '@react-native-firebase/auth';
import { Button, StyleSheet, Text, View } from "react-native";
import { stringsConstants } from "../../constants/StringsConstants";
import { colorConstants } from "../../constants/ColorConstants";
import { styles } from "../../constants/StylesConstants";
import { MyStatusBar } from "../../components/StatusBarComponent";
import { MaterialIcon } from "../../components/IconsComponent";
interface Todos {
    id: string,
    userId: string,
    title: string,
    complete: boolean
}

interface UpdateTodo {
    id?: string,
    title: string
}

function TodosScreen() {
    const ref = firestore().collection('todos');
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<Todos[]>();
    const userId = auth().currentUser?.uid;
    async function addTodo() {
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
    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list: Todos[] = [];
            if (querySnapshot)
                querySnapshot.forEach(doc => {
                    const { userId, title, complete } = doc.data();
                    list.push({
                        id: doc.id,
                        userId,
                        title,
                        complete,
                    });
                });
            setTodos(list);
            if (loading) {
                setLoading(false);
            }
        });
    }, []);
    return (
        <>
            <MyStatusBar backgroundColor={colorConstants.primary} barStyle="light-content" />
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colorConstants.primary,
                padding: 15,
                marginBottom: 10
            }}>
                <Text style={{ fontSize: 20, fontWeight: "700", color: colorConstants.white }}>
                    {stringsConstants.todoList}
                </Text>
            </View>
            <View style={[styles.inputView, { width: "95%", alignSelf: "center" }]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.newTodo}
                    placeholderTextColor={colorConstants.placeHolderText}
                    value={todo} onChangeText={setTodo} />
            </View>
            <FlatList
                style={{ flex: 1 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Todo {...item} />}
            />
            <TouchableOpacity style={[styles.btn, localStyles.addTodoBtn]}
                onPress={() => addTodo()}>
                <Text style={styles.lgnTxt}>{stringsConstants.addTodo}</Text>
            </TouchableOpacity>

        </>
    );
    function Todo(todo: Todos) {
        async function toggleComplete() {
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
        async function deleteTodo() {
            await firestore()
                .collection('todos')
                .doc(todo.id).delete();
        }
        function showPersonTodoMessage() {
            Snackbar.show({
                text: "This is a public todo",
                duration: Snackbar.LENGTH_SHORT,
            });
        }


        return (
            <View style={localStyles.todoCard}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={todo.userId == userId ? toggleComplete : showPersonTodoMessage}>
                        <MaterialIcon size="large"
                            color={todo.complete ? "green" : "cancel"}
                            name={todo.userId == userId ? (todo.complete ? "check" : "cancel") : "account"} />
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <Text>
                        {todo.title}
                    </Text>
                </View>
                {todo.userId == userId ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setTodo(todo.title)}>
                        <MaterialIcon size="large" color="green" name="pencil" />
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity onPress={deleteTodo}>
                        <MaterialIcon size="large" color="red" name="delete" />
                    </TouchableOpacity>
                </View> :
                    null
                }
            </View>
        );
    }
}


export const localStyles = StyleSheet.create({
    todoCard: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colorConstants.grey,
        borderRadius: 6,
        padding: 15
    },

    addTodoBtn: {
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 20
    }

});


export default TodosScreen;