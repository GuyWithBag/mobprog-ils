import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [currentAnswers, setcurrentAnswers] = useState()

  const setCurrentAnswersData = () => {
    console.log('answersID');
  }

  return (
    <Context.Provider
      value={{
        currentAnswers,
        setcurrentAnswers,
        setCurrentAnswersData
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);