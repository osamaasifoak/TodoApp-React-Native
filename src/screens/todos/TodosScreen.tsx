import React, { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import Snackbar from "react-native-snackbar";
import auth from '@react-native-firebase/auth';
import {  StyleSheet, Text, View } from "react-native";
import { stringsConstants } from "../../constants/StringsConstants";
import { colorConstants } from "../../constants/ColorConstants";
import { styles } from "../../constants/StylesConstants";
import { MaterialIcon } from "../../components/IconsComponent";
import { addTodo, deleteTodo, toggleComplete, updateTodoFir } from "../../services/TodoServices";
import { AppbarComponent } from "../../components/AppbarComponent";
import RadioGroup from 'react-native-radio-buttons-group';
import { useFocusEffect } from "@react-navigation/native";

export interface Todo {
    id: string,
    userId: string,
    title: string,
    complete: boolean
}


function TodosScreen() {
    const ref = firestore().collection('todos');
    const [loading, setLoading] = useState(true);
    const [updateTodo, setUpdateTodo] = useState<Todo | undefined>();
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<Todo[]>();
    const userId = auth().currentUser?.uid;
    const selectionTodoData = [{
        id: '1',
        label: 'My Todo',
        value: 'MyTodo',
        selected: true,
    }, {
        id: '2',
        label: 'Public Todo',
        value: 'PublicTodo',
        selected: false,
    }]
    const [selectionTodo, setSelectionTodo] = useState(selectionTodoData)
    function onPressRadioButton(radioButtonsArray: any) {
        setSelectionTodo(radioButtonsArray);
    }

    useEffect(() => {
        return fetchPublicTodo()
    }, [])
    useFocusEffect(
        React.useCallback(() => {
            fetchPublicTodo()
            // StatusBar.setBackgroundColor(statusBarColor);
            // StatusBar.setTranslucent(translucent);
        }, [selectionTodo]),
    );

    function fetchPublicTodo(): any {
        const selected = selectionTodo.find(x => x.selected == true)
        if (selected?.id == "1") {
            console.log(selected)
            const query = ref.where('userId', "==", userId);
            return query.onSnapshot(querySnapshot => {
                const list: Todo[] = [];
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
        } else {
            return ref.onSnapshot(querySnapshot => {
                const list: Todo[] = [];
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
        }
    }


    return (
        <>
            <AppbarComponent />
            <View style={[styles.inputView, { width: "95%", alignSelf: "center", flexDirection: "row", alignItems: "center" }]}>
                <TextInput
                    style={styles.TextInput}
                    placeholder={stringsConstants.newTodo}
                    placeholderTextColor={colorConstants.placeHolderText}
                    value={(updateTodo != undefined) ? updateTodo.title : todo}
                    onChangeText={(val) => {
                        (updateTodo != undefined) ?
                            setUpdateTodo({ ...updateTodo, title: val }) :
                            setTodo(val)
                    }}

                />
                {
                    (updateTodo != undefined) ?
                        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => setUpdateTodo(undefined)}>
                            <MaterialIcon size="large" color="red" name="close" />
                        </TouchableOpacity> : null
                }
            </View>
            <RadioGroup
                layout={"row"}
                radioButtons={selectionTodo}
                onPress={onPressRadioButton}
            />

            <FlatList
                style={{ flex: 1 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Todo {...item} />}
            />
            <TouchableOpacity style={[styles.btn, localStyles.addTodoBtn]}
                onPress={() => ((updateTodo != undefined) ? updateTodoFir(updateTodo, setUpdateTodo) : addTodo(todo, userId!, setTodo))}>
                <Text style={styles.lgnTxt}>{(updateTodo != undefined) ? stringsConstants.updateTodo : stringsConstants.addTodo}</Text>
            </TouchableOpacity>

        </>
    );
    function Todo(todo: Todo) {
        function showPersonTodoMessage() {
            Snackbar.show({
                text: "This is a public todo",
                duration: Snackbar.LENGTH_SHORT,
            });
        }
        return (
            <View style={localStyles.todoCard}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={todo.userId == userId ? () => toggleComplete(todo) : showPersonTodoMessage}>
                        <MaterialIcon size="large"
                            color={todo.complete ? "green" : "cancel"}
                            name={todo.userId == userId ? (todo.complete ? "check" : "cancel") : "account"} />
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <Text>
                        {todo.title}
                    </Text>
                </View>
                {
                    todo.userId == userId ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => setUpdateTodo(todo)}>
                            <MaterialIcon size="large" color="green" name="pencil" />
                        </TouchableOpacity>
                        <View style={{ width: 10 }} />
                        <TouchableOpacity onPress={() => deleteTodo(todo)}>
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