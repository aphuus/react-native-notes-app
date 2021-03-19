import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrashIcon from './TrashIcon';

const NoteItem = ({ content, id }) => {
  // TODO -> deleteNote functuonality

  const handleDelete = () => {
    console.log(id);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{content}</Text>
      <TouchableOpacity onPress={handleDelete}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
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
  itemText: {
    fontSize: 18,
  },
});
