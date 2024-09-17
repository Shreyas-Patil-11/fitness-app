import React, { createContext, useState } from "react";
import run from "../Config/gemini"; // Import your AI function

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [bmiDetails, setBmiDetails] = useState(null); // State for BMI details
  const [exerciseRecommendations, setExerciseRecommendations] = useState([]); // State for exercise recommendations

  const sendPrompt = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      setChatHistory((prev) => [...prev, { type: 'user', text: input }]);
      
      const result = await run(input);
      setLoading(false);

      if (result) {
        setChatHistory((prev) => [...prev, { type: 'assistant', text: result }]);
        setPrevPrompts([...prevPrompts, input]);
        setRecentPrompt(input);
        setShowResult(true);
        setInput("");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error while sending prompt:", error);
    }
  };

  // Function to calculate BMI and fetch advice
  const calculateBmiAndFetchAdvice = async (weight, height) => {
    if (weight <= 0 || height <= 0) return;

    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    let category = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    const bmiPrompt = `Provide advice for a person with a BMI of ${bmiValue.toFixed(2)} (${category}).`;
    const exercisePrompt = `Recommend some exercises for a person with ${category} BMI.`;

    try {
      // Get BMI advice
      const bmiResult = await run(bmiPrompt);
      if (bmiResult) {
        setBmiDetails(bmiResult);
      }

      // Get exercise recommendations
      const exerciseResult = await run(exercisePrompt);
      if (exerciseResult) {
        // Split exercises by newline or comma
        setExerciseRecommendations(exerciseResult.split('\n').map(ex => ex.trim()).filter(ex => ex));
      }
    } catch (error) {
      console.error("Error fetching BMI details or exercises:", error);
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    sendPrompt,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    chatHistory,
    input,
    setInput,
    calculateBmiAndFetchAdvice, // Add this to context
    bmiDetails, // Add this to context
    exerciseRecommendations // Add this to context
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
