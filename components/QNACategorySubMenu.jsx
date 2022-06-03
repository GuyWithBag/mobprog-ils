import React from 'react'
import { useStateContext } from '../context/StateContext'

const QNACategorySubMenu = ({key, text, answersID = 0}) => {
  const { setCurrentAnswersData } = useStateContext()

  return (
    <button onClick={() => setCurrentAnswersData(answersID)} className='qna-category-submenu-block'>
        {text}
    </button>
  )
}

export default QNACategorySubMenu