import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NoteItem from './NoteItem';
import PlusIcon from './PlusIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([{ content: 'note', id: 1 }]);

  const saveNote = async (note_object) => {
    const existingNotes = await AsyncStorage.getItem('@notes');
    let jsonNotes = JSON.parse(existingNotes);

    if (!jsonNotes) {
      jsonNotes = [];
    } else if (
      jsonNotes.some(
        (note) =>
          note.content.toLowerCase() === note_object.content.toLowerCase()
      )
    ) {
      console.log(jsonNotes);
      return Alert.alert(
        'Note already exist',
        'Please type something else...',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } else if (note_object.content === null || note_object.content === '') {
      return Alert.alert('Empty note', 'You must type something', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    jsonNotes.push(note_object);
    await AsyncStorage.setItem('@notes', JSON.stringify(jsonNotes))
      .then(setNotes(jsonNotes))
      .catch((e) => console.log(`Error saving: ${e}`));
  };

  const loadNotes = async () => {
    try {
      const jsonNotes = await AsyncStorage.getItem('@notes');
      return jsonNotes !== null ? JSON.parse(jsonNotes) : null;
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  /**
   * Clears AsyncStorage
   */
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(`Error clearing: ${e}`);
    }
  };

  useEffect(() => {
    loadNotes().then((x) => setNotes(x));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.notes}
        data={notes}
        renderItem={({ item }) => (
          <NoteItem content={item.content} id={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Add Note', { saveNote })}
      >
        <View style={styles.buttonWrap}>
          <PlusIcon style={styles.plusIcon} />
        </View>
      </TouchableOpacity>
      <StatusBar style='light' />
    </SafeAreaView>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  notes: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#009fe3',
  },
});
