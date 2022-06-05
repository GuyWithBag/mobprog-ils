import React from 'react'

const AnswersDataContainer = ({ content = <p>TEST123456</p>}) => {
  return (
    <div className='answers-data-container'>
        <div className='qna-answers'>
          {content}
        </div>
    </div>
  )
}

export default AnswersDataContainer