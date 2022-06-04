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
      Key : '3',
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
                          'text': 'How to Order?',
                      },
                      {
                          'answersID':1,
                          'text': 'Where is Your Store Location',
                      },
                      {
                          'answersID':2,
                          'text': 'How Can I Take Care of My Flowers ',
                      },
                      {
                          'answersID':3,
                          'text': 'How Long do Flowers Usally Last?',
                      }
                    ]
                }
                />
                <QNACategory 
                  category='Payments'
                  subMenuList={
                    [
                      {
                          'answersID':4,
                          'text': 'How to Pay?',
                      },
                      {
                          'answersID':5,
                          'text': 'Can You Customize an Order?',
                      },
                      {
                        'answersID':6,
                        'text': 'Can You Make The Sender Annonymous?',
                    },
                    ]
                }
                />
                <QNACategory 
                  category='Return and Refunds'
                  subMenuList={
                    [
                      {
                          'answersID':7,
                          'text': 'How Can I Make Changes With My Orders?',
                      },
                      {
                          'answersID':8,
                          'text': 'How do I Cancel My Order ',
                      },
                      {
                        'answersID':9,
                        'text': 'How can I Return and Exchange my Order?',
                    }
                    ]
                }
                />
                 <QNACategory 
                  category='Orders and Shipping'
                  subMenuList={
                    [
                      {
                          'answersID':10,
                          'text': 'How Will I Know if My Order is Confirmed and Ready for Processing?',
                      },
                      {
                          'answersID':11,
                          'text': 'How Much is Your Shipping Fee ? ',
                      },
                      {
                        'answersID':12,
                        'text': 'Can I Pick-up My Order in Your Store? ',
                    },
                    {
                      'answersID':13,
                      'text': 'Do You Accept Advance Orders? ',
                  },
                  {
                    'answersID':14,
                    'text': 'Can we Make The Delivery Into a Surprise? ',
                },
                {
                  'answersID':15,
                  'text': 'How do I Add Special Instructions to My Order?',
              }
                    ]
                }
                />
                 <QNACategory 
                  category='Sellers and Partners'
                  subMenuList={
                    [
                      {
                          'answersID':16,
                          'text': 'test12',
                      },
                      {
                          'answersID':17,
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
                          'text': 'Terms & Condition',
                      },
                      {
                          'answersID':14,
                          'text': 'Privacy Policy',
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