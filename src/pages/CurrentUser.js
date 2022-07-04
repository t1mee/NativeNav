import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const CurrentUser = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Users Screen</Text>
    </View>
  );
};

const mapStateToProps = ({currentUser: {currentUser}}) => {
  console.log(currentUser);
  return {currentUser};
};

export default connect(mapStateToProps, null)(CurrentUser);
