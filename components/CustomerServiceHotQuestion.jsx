import React from 'react'
import Link from 'next/link'

const CustomerServiceHotQuestion = ( {text} ) => {
  return (
    <Link href='customer-service/questions-and-answers' className='customer-service-hot-question'>
        <a>
          <p className='customer-service-hot-question-text'>{text}</p>
        </a>
    </Link>
  )
}

export default CustomerServiceHotQuestion