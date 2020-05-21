/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  /**
   *? This part actually doesnt get compiled as React. It stays as JavaScript.
   ** Setting the attributes.
   * @param enteredGoal[].
   ** Using React Hooks.
   */
  const [enteredGoal, setEnteredGoal] = useState("");

  /**
   ** Setting up the functions.
   * @param {string} enteredText
   */

  // Additional Function for onChangeText to trigger.
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  // Function for adding the goal to array, cleaning the input.
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  /* -------------------------------- Main View ------------------------------- */
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="to do is..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

/* ---------------------------- Container Styles ---------------------------- */
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
