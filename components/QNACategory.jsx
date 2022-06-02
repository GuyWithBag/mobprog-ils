import React from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { QNACategorySubMenu } from './'
import { useState } from 'react';

const QNACategory = ( { icon = <BiDownArrow />, category, submenu } ) => {
  const [subMenu, showSubMenu] = useState(false);
  
  return (
    <>
      <button className='qna-category' onClick={() => showSubMenu((o) => !o)}>
          {icon}
          <p className='qna-category-text'>{category}</p>
          <BiDownArrow className={subMenu ? 'qna-category-down-arrow' : 'qna-category-down-arrow-toggled'}/>
      </button>
      <div className={subMenu ? 'qna-category-submenu' : 'display-none'}>
          <QNACategorySubMenu />
      </div>
    </>
  )
}

export default QNACategory