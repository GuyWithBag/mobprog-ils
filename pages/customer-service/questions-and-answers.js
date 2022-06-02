import React from 'react'
import Image from 'next/image'
import { QNACategory } from '../../components'

const questionsAndAnswers = () => {
  return (
    <div className='layout-inner-contents'>
      <div className='qna-contents'>
        <div className='qna-categorys'>
          <div className='qna-all-categories'>
            <QNACategory 
              category='TESTTTTTTTTTTTTTTTTTTTTTT'
              submenu={('test1', 'test2')}
            />
            <QNACategory 
              category='TESTTTTTTTTTTTTTTTTTTTTTT'
              submenu={('test1', 'test2')}
            />
            <QNACategory 
              category='TESTTTTTTTTTTTTTTTTTTTTTT'
              submenu={('test1', 'test2')}
            />
          </div>
        </div>
        <div className='qna-all-answers'>
          texttttttttt
        </div>
      </div>
    </div>
  )
}

export default questionsAndAnswers