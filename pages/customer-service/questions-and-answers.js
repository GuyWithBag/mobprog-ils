import React from 'react'
import Image from 'next/image'
import { QNACategory } from '../../components'

const questionsAndAnswers = () => {
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

          </div>
        </div>
      </div>
    </div>
  )
}

export default questionsAndAnswers