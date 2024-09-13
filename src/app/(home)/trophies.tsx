import { trophyCollection } from '@/src/config/trophyCollection';
import { useUser } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Trophies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {trophyCollection.map((trophy) => (
          <View key={trophy.id}>
            <Text> {trophy.title}</Text>
            <Text> {trophy.points}</Text>
            <Text> {trophy.category}</Text>
            {trophy.icon && (
              <Image
                source={trophy.icon}
                style={{ width: 50, height: 50 }}
                onError={() => console.log('Error loading image')}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});

export default Trophies;

/*
const initialQuestions = [ { id: 1, text: "What is your name?", options: ["Alice", "Bob", "Charlie", "Diana"], answer: null }, { id: 2, text: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"], answer: null }, 

import React, { useState } from 'react';

const QuestionComponent = () => {
  // State to manage the current question index and the questions array
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle answer selection
  const handleAnswer = (selectedAnswer) => {
    const updatedQuestions = questions.map((question, index) =>
      index === currentIndex ? { ...question, answer: selectedAnswer } : question
    );
    setQuestions(updatedQuestions);
  };

  // Function to navigate to the next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to navigate to the previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h2>Question {currentIndex + 1}</h2>
      <p>{questions[currentIndex].text}</p>
      <div>
        {questions[currentIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionComponent;
*/
