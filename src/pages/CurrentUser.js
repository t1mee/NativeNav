import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const CurrentUser = ({currentUser}) => {
  const [userState, setUser] = useState();

  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${currentUser}`,
    );
    const {name} = await response.json();
    setUser(name);
  };

  useEffect(() => {
    getUser();
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{userState}</Text>
    </View>
  );
};

export default connect(({currentUser}) => currentUser, null)(CurrentUser);
