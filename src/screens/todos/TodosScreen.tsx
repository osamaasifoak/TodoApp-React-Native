import React, { useState } from "react";
import {
    Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
function TodosScreen() {
    const ref = firestore().collection('todos');
    const [todo, setTodo] = useState('');
    async function addTodo() {
        await ref.add({
            title: todo,
            complete: false,
        });
        setTodo('');
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Appbar>
                    <Appbar.Content title={'TODOs List'} />
                </Appbar>
                <ScrollView style={{ flex: 1 }}>
                    <Text>List of TODOs!</Text>
                </ScrollView>
                <TextInput label={'New Todo'} onChangeText={() => { }} />
                <Button onPress={() => { }}>Add TODO</Button>
            </SafeAreaView>
        </>
    );
}



export default TodosScreen;