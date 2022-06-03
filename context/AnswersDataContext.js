import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [currentAnswers, setCurrentAnswers] = useState('')
    
  {/*function setCurrentAnswers() {
    console.log('test')
  }*/}

  return (
    <Context.Provider
      value={{
        currentAnswers, 
        setCurrentAnswers
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);