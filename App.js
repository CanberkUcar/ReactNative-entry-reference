/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

// * Custom Components for this app.
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

/* -------------------------------- Main App -------------------------------- */
export default function App() {
  /**
   *? This part actually doesnt get compiled as React. It stays as JavaScript.
   ** Setting the attributes.
   * @param toGoals[]/isAddMode[].
   ** Using React Hooks.
   */
  const [toGoals, setToGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  /**
   ** Setting up the functions.
   * @param {string} goalTitle
   ** Spread Operator "..." = anon function to applies the state.
   */

  // Function for the seeing the input.
  const addGoalHandler = (goalTitle) => {
    //
    setToGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  // Function for the removing the item.
  const removeGoalHandler = (goalId) => {
    setToGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  // Function for the cancel button.
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  /* -------------------------------- Main View ------------------------------- */
  return (
    <View style={styles.screen}>
      <Button title="Add To Do" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

/* ---------------------------- Container Styles ---------------------------- */
const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
