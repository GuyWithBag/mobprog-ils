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
        <ol>
          <li>Browse the products and its descriptions.  </li>
          <li>Choose the products you want. </li>
          <li>Choose the add-ons you want to come with it. </li>
          <li>Select your preferred delivery date and timeframe. </li>
          <li>Add to cart </li>
          <li>Proceed to checkout. </li>
          <li>Fill in all the necessary shipping, message and instruction details. </li>
          <li>Go to payment. </li>
          <li>Select payment method. </li>
          <li>Click on complete order.</li>
        </ol>
           <p>Once the order is completed, you will be redirected to the order confirmation page and you will receive an email containing your order names and number. 
           </p>
      </div>
    },
    {
      name : 'Delivery',
      html : 
      <div>
        Jk dont fuck me please
      </div>
    },
    
    {
      Key : '9',
      html: 
      <div>After the order is completed, you will receive an email confirmation that includes your order number. </div>
     },
     {
      Key : 'this is answerID 1',
      html: 
      <div>put html stuff here</div>
      },
    
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
                          'text': 'HOW TO ORDER?',
                      },
                      {
                          'answersID':1,
                          'text': 'BBB',
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
                <QNACategory 
                  category='Return and Refunds'
                  subMenuList={
                    [
                      {
                          'answersID':7,
                          'text': 'test8',
                      },
                      {
                          'answersID':8,
                          'text': 'test9',
                      }
                    ]
                }
                />
                 <QNACategory 
                  category='Orders and Shipping'
                  subMenuList={
                    [
                      {
                          'answersID':9,
                          'text': 'HOW WILL I KNOW IF MY ORDER IS CONFIRMED AND READY FOR PROCESSING?',
                      },
                      {
                          'answersID':10,
                          'text': 'test11',
                      }
                    ]
                }
                />
                 <QNACategory 
                  category='Sellers and Partners'
                  subMenuList={
                    [
                      {
                          'answersID':11,
                          'text': 'test12',
                      },
                      {
                          'answersID':12,
                          'text': 'test13',
                      }
                    ]
                }
                />
                 <QNACategory 
                  category='General'
                  subMenuList={
                    [
                      {
                          'answersID':13,
                          'text': 'test14',
                      },
                      {
                          'answersID':15,
                          'text': 'test16',
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