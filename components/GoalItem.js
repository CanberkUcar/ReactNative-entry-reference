/* --------------------------------- IMPORTS -------------------------------- */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/**
 ** Goal item that rendered. Inputs that are given basiically.
 * @param {class from react.} props
 */
const GoalItem = (props) => {
  /* -------------------------------- Main View ------------------------------- */
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

/* ---------------------------- Container Styles ---------------------------- */
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#69ffa0",
    borderBottomColor: "#9e9e9e",
    borderBottomWidth: 1,
  },
});
