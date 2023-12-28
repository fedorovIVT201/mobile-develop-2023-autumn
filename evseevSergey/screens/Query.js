import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const GET_USERS = gql`
  query getAllUsers {
    id
    name
    login
    pass
  }
`;

const DisplayUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return (
    <View>
      {Object.values(data).map((users) => (
        <View key={users.id}>
          <Text>{users.login}</Text>
          <Text>{users.pass}</Text>
        </View>
        //ITS WORKINGG!!!
      ))}
    </View>
  );
};
export default DisplayUsers;
