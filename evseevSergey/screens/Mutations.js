import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gql, useMutation } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { TextInput } from "react-native-gesture-handler";
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

//Define mutation
const ADD_USERS = gql`
  mutation {
    createUser(type: $type) {
      name
      login
      pass
    }
  }
`;

const PassUsers = () => {
  const [addUser, { data, loading, error }] = useMutation(ADD_USERS);
  if (loading) return <Text>Submitting...</Text>;
  if (error) return <Text>Submission error!</Text>;
  return (
    <View>
      <View>
        <TextInput></TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={ADD_USERS}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PassUsers;
