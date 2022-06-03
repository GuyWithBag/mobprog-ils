import React from 'react'
import { useStateContext } from '../context/AnswersDataContext';

const QNACategorySubMenu = ({key, text, answersID}) => {
  const {currentAnswers, setCurrentAnswers} = useStateContext(answersID)

  return (
    <button onClick={() => setCurrentAnswers(answersID)} className='qna-category-submenu-block'>
        {text}
    </button>
  )
}

export default QNACategorySubMenu