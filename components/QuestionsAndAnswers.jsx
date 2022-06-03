import React from 'react'
import Image from 'next/image'
import { QNACategory, AnswersDataContainer } from './'
import { useStateContext } from '../context/StateContext';

const QuestionsAndAnswers = () => {
  const { currentAnswersID } = useStateContext()

  let answersData = [
    {
      name : 'Rewards',
      html : 
      <div>
        Fuck yoausdoiausdioauwodiawu
      </div>
    },
    {
      name : 'Delivery',
      html : 
      <div>
        Jk dont fuck me please
      </div>
    }
  ]

  return (
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
                      {
                          'answersID':0,
                          'text': 'test1',
                      },
                      {
                          'answersID':1,
                          'text': 'test2',
                      },
                      {
                          'answersID':2,
                          'text': 'test3',
                      },
                      {
                          'answersID':4,
                          'text': 'test4',
                      }
                    ]
                }
                />
                <QNACategory 
                  category='Payments'
                  subMenuList={
                    [
                      {
                          'answersID':5,
                          'text': 'test6',
                      },
                      {
                          'answersID':6,
                          'text': 'test7',
                      }
                    ]
                }
                />
            </div>
            </div>
            <div className='qna-all-answers'>
                <AnswersDataContainer content={answersData[currentAnswersID]['html']}/>
            </div>
        </div>
    </div>
  )
}

export default QuestionsAndAnswers