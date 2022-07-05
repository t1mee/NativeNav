import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect, useDispatch} from 'react-redux';

const Users = ({currentUser}) => {
  const [usersState, setUsers] = useState();
  const dispatch = useDispatch();

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.list}>
      {usersState &&
        usersState.map(({id, name}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => dispatch({type: 'select', payload: id})}
            key={id}>
            <Text
              style={[styles.listItem, currentUser === id && styles.currUser]}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default connect(({currentUser}) => currentUser, null)(Users);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    marginBottom: 20,
    padding: 6,
    minWidth: 200,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
  },
  currUser: {
    backgroundColor: 'lime',
  },
});
