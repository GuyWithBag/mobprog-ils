import React from 'react'
import Image from 'next/image'
import { QNACategory, AnswersDataContainer } from '../../components'
import { useState } from 'react'

const questionsAndAnswers = () => {
  const [currentAnswers, setCurrentAnswers] = useState('')
  {/*function setCurrentAnswers( id = '') {
    data = [
      {
        id : 'id1',
        html : 
        <>
          test answers 1
        </>
      }
    ]
    currentAnswers = data
    return currentAnswers
  } */}

  return (
    <div className='layout-inner-contents'>
      <div className='qna'>
        <div className='customer-service-banner'>
          <div className='customer-service-banner-contents'>
            <h1 className='customer-service-header'>Customer Service</h1>
            <h1 className='customer-service-sub-heading'>How can we help you?</h1>
          </div>
        </div>
        <div className='qna-contents'>
          <div className='qna-categorys'>
            <div className='qna-all-categories'>
              <QNACategory 
                category='Shop with Us'
                subMenuList={
                  [
                    {'text': 'test1', 'content':'insert html'},
                    {'text': 'test2', 'content':'insert html2'}
                  ]
                }
              />
            </div>
          </div>
          <div className='qna-all-answers'>
              <AnswersDataContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default questionsAndAnswers