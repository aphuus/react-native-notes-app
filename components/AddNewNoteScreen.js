import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const AddNewNoteScreen = ({ route, navigation }) => {
  const [newNote, setNewNote] = useState('');
  const { saveNote } = route.params;

  const handleAddNewNote = () => {
    if (newNote === null || newNote === '') {
      return Alert.alert('Empty note', 'You must type something', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      const newNoteObject = {
        content: newNote,
        id: Math.floor(Math.random() * 1000 + 1),
      };
      saveNote(newNoteObject);
      setNewNote('');
      navigation.goBack();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <TextInput
            placeholder='Write your note'
            style={styles.textInput}
            onChangeText={(text) => setNewNote(text)}
            defaultValue={newNote}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleAddNewNote}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddNewNoteScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 18,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12.0,

    elevation: 30,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    paddingVertical: 20,
    marginTop: 40,
    backgroundColor: '#009fe3',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#fff',
  },
});
