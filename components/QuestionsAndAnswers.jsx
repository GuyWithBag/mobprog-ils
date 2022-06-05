import React from 'react'
import Image from 'next/image'
import { QNACategory, AnswersDataContainer } from './'
import { useStateContext } from '../context/StateContext';

const QuestionsAndAnswers = () => {
  const { currentAnswersID } = useStateContext()

  let answersData = [
      {
        name : 'How to Order',
        html : 
          <>
            <h1>How to Order?</h1>
            <ol className='how-to-order-list'>
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
            <p>
              Once the order is completed, you will be redirected to the order confirmation page and you will receive an email containing your order names and number. 
            </p>
          </>
      },
      {
        name : 'Where is your store location?',
        html : 
          <>
            <h1>Where is your store location?</h1>
            <p>
              We are an online flower shop so we don’t have a physical store but you can view and order our products on our website.. 
            </p>
          </>
      },
      
      {
        name : 'How can i take care of my flowers?',
        html: 
          <>
            <h1>How can i take care of my flowers?</h1>
            <p>
              Our flowers are delivered fresh cut. You can take care of them and maintain its freshness by checking our Care Instructions.   
            </p> 
          </>
      },
      {
        name : 'How long do flowers usually last?',
        html: 
          <>
            <h1>How long do flowers usually last?</h1>
            <p>
              Our flowers can last for 3-5 days as long as it’s placed in room temperature except for Sunflowers, which need to be placed near direct sunlight. It can last longer if you follow the Care Instructions.  
            </p>
          </>
      },
      {
        name : 'How to pay?',
        html: 
          <>
            <h1>How to pay?</h1>
            <p>
              We accept payments made via Credit card, Cash pick-up from sender, Paypal, Cash on delivery, (others). Check out Payment Method page for more info. 
            </p>
            <p>
              NOTE: CASH ON DELIVERY is only available if the sender and the recipient is the same person. COD limit is Php 3,000. For orders more than the limit, you may choose CASH PICK-UP if you still prefer to pay in cash. 
            </p>
          </>
      },
      {
        name : 'Can you customize an order?',
        html: 
          <>
            <h1>Can you customize an order?</h1>
            <p>
              We don’t do customized arrangements as we only produce what is shown on our site. 
            </p>
          </>
      },
      {
        name : 'Can you make the sender Annonymous?',
        html: 
          <>
            <h1>Can you make the sender Annonymous?</h1>
            <p>
              Yes, we don’t disclose the details of the sender unless his or her name is included on the message for the card. 
            </p>
          </>
      },
      {
        name : 'How can i make changes with my orders?',
        html: 
          <>
            <h1>How can i make changes with my orders?</h1>
            <p>
              To make changes with the delivery address or your personal message, kindly send us an email at celebracetgm@gmail.com, call us at 09483182462 - SMART or reach us via Facebook chat. Please note that we can only accept changes three (3) hours before the delivery. 
            </p>
          </>
      },
      {
        name : 'How do i cancel my order?',
        html: 
          <>
            <h1>How do i cancel my order?</h1>
            <p>
              To cancel your order, you may send us an email at celebracetgm@gmail.com, call us at 09483182462 - SMART or reach us via Facebook chat. Please note that we can only cancel your order if it is not yet dispatched from our location. 
            </p>
          </>
      },
      {
        name : 'How can i return and exchange my order?',
        html: 
          <>
            <h1>How can i return and exchange my order?</h1>
            <p>
              We guarantee your satisfaction! If in the unlikely case that you are not satisfied with the freshness of your order or the condition of any of our items, please contact us within 24 hours and include the photos of the item delivered and we will gladly replace it. 

              For quick assistance, you may call us at:  
            </p>
          </>
      },
      {
        name : 'How will i know if my order is confirmed and ready for processing?',
        html: 
          <>
            <h1>How will i know if my order is confirmed and ready for processing?</h1>
            <p>
              After the order is completed, you will receive an email confirmation that includes your order number. 
            </p>
          </>
      },
      {
        name : 'How much is your shipping fee?',
        html: 
          <>
            <h1>How much is your shipping fee?</h1>
            <p>
            We offer Free Same Day Delivery so no shipping fee is required. 
            </p>
          </>
      },
      {
        name : 'Can i pick up my order in your Store?',
        html: 
          <>
            <h1>Can i pick up my order in your Store?</h1>
            <p>
              Yes, we accept pick-ups. We can also arrange the delivery of your order at your preferred location everywhere within Tagum City.  
            </p>
          </>
      },
      {
        name : 'Do you accept advanced orders?',
        html: 
          <>
            <h1>Do you accept advanced orders?</h1>
            <p>
              Yes. You can order now for future dates (up to 1 year in advance) 
            </p>
          </>
      },
      {
        name : 'Can we make the delivery into a surpise?',
        html: 
          <>
            <h1>Can we make the delivery into a surpise?</h1>
            <p>
              Yes, we will only call the recipient if our rider can’t find him/her and we won’t disclose that the delivery are flowers or balloons to keep it as a surprise. 
            </p>
          </>
      },
      {
        name : 'How do i add special instructions to my order?',
        html: 
          <>
            <h1>How do i add special instructions to my order?</h1>
            <p>
              You can do so by including your special instructions on the delivery notes section during check-out while ordering through our website. 
            </p>
          </>
      },
      {
        name : 'Are you flower fresh?',
        html: 
          <>
            <h1>Are you flower fresh?</h1>
            <p>
              
            </p>
          </>
      },
      {
        name : 'Terms and Conditions',
        html: 
          <>
            <h1>TERMS & CONDITIONS</h1>
            <h2>Order Confirmation and Delivery Time: </h2>
            <p>
              Please ensure that the contact number specified upon check out is correct. Upon receiving your order, a member of the Celebrace team will call you to reconfirm your order and determine the specific delivery date. 
            </p>
            <h2>Message to Recipient: </h2>
            <p>
              You may also provide a message that we can attach to your special gift via SMS after the order confirmation call. 
            </p>
            <h2>Flower Substitutions: </h2>
            <p>
              Celebrace strives to deliver your special gift in a timely manner while also ensuring the quality of the flowers used for your arrangement. To achieve this, we may substitute certain flowers based on availability. We make sure that blooms used as substitutes will be as similar as possible to the original. 
            </p>
            <h2>Packaging Substitutions: </h2>
            <p>
              Bouquet wraps, ribbons, and designs may vary according to availability. We ensure that materials used for packaging follow the same theme or category and are of equal value to the original design. 
            </p>
            <h2>Return and Exchange Policy:</h2>
            <p>
              We guarantee your satisfaction! If in the unlikely case that you are not satisfied with the freshness of your order or the condition of any of our items, kindly contact us and we will gladly replace or refund your money. 
            </p>
          </>
      },
      {
        name : 'Privacy Policy?',
        html: 
          <>
            <h1>Privacy Policy?</h1>
            <p>
              Privacy Notice, Information Collection, Use and Sharing Your access to and Control Over Information Security 
            </p>
            <p>
              This privacy notice discloses the privacy practices for Celebrace. This privacy notice applies solely to information collected by this website. It will notify you of the following: 
            </p>
              What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared. 
            <p>
              What choices are available to you regarding the use of your data. 
            </p>
              The security procedures in place to protect the misuse of your information. 
            <p>
              How you can correct any inaccuracies in the information. 
            </p>
              We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. 
            <p>
              We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order. 
            </p>
            <p>
              Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy. 
            </p>
            <p>
              You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website: 
            </p>
              See what data we have about you, if any. 
            <p>
              Change/correct any data we have about you. 
            </p>
              Have us delete any data we have about you. 
            <p>
              Express any concern you have about our use of your data. 
            </p>
              We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. 
            <p>
              Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the Web page. 
            </p>
              While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment. 
            <p>
              If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone or via email. 
            </p>
          </>
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
                      'text': 'Are Your Flower Fresh?',
                    }
                  ]
                }
              />
                <QNACategory 
                category='General'
                subMenuList={
                  [
                    {
                        'answersID':17,
                        'text': 'Terms & Condition',
                    },
                    {
                        'answersID':18,
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