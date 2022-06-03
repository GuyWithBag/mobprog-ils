import React from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { QNACategorySubMenu } from './'
import { useState } from 'react';

const QNACategory = ({ icon = <BiDownArrow />, category, subMenuList}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      <button className='qna-category' onClick={() => setShowSubMenu((o) => !o)}>
          {icon}
          <p className='qna-category-text'>{category}</p>
          <BiDownArrow className={showSubMenu ? 'qna-category-down-arrow' : 'qna-category-down-arrow-toggled'}/>
      </button>
      <div className={showSubMenu ? 'qna-category-submenu' : 'qna-category-submenu qna-category-submenu-inactive'}>
          {subMenuList?.map((subMenu) => <QNACategorySubMenu key = {subMenu.text} text={subMenu.text} answersID={subMenu.answersID}/>)}
      </div>
    </>
  )
}

export default QNACategory