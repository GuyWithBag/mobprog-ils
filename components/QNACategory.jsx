import React from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { QNACategorySubMenu } from './'
import { useState } from 'react';

const QNACategory = ({ icon = <BiDownArrow />, category, subMenuList }) => {
  const [subMenuOn, showSubMenu] = useState(false);
  return (
    <>
      <button className='qna-category' onClick={() => showSubMenu((o) => !o)}>
          {icon}
          <p className='qna-category-text'>{category}</p>
          <BiDownArrow className={subMenuOn ? 'qna-category-down-arrow' : 'qna-category-down-arrow-toggled'}/>
      </button>
      <div className={subMenuOn ? 'qna-category-submenu' : 'display-none'}>
          {subMenuList?.map((subMenu) => <QNACategorySubMenu text={subMenu.text} />)}
      </div>
    </>
  )
}

export default QNACategory