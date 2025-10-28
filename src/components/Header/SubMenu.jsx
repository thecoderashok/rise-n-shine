import React from 'react'
import styles from './Header.module.scss'
import MenuItem from './MenuItem'

const SubMenu = ({ menus, subMenuRef, customClass, ...props }) => {

    return (
        <div className={`${styles.header_sub_menu} ${customClass}`} {...props}>
            <ul ref={subMenuRef}>
                {menus.map((subItem, subIndex) => (
                    <MenuItem menuItem={subItem} key={subIndex} menuItemIndex={subIndex} />
                ))}
            </ul>
        </div>
    )
}

export default React.memo(SubMenu);