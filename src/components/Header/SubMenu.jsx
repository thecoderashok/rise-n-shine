import React from 'react'
import styles from './Header.module.scss'
import MenuItem from './MenuItem'

const SubMenu = ({ menus, subMenuRef, customClass, ...props }) => {

    return (
        <div className={`${styles.sub_menu} ${customClass}`} {...props}>
            <div className={styles.sub_menu_inner}>
                <ul ref={subMenuRef}>
                    {menus.map((subItem, subIndex) => (
                        <MenuItem menuItem={subItem} key={subIndex} menuItemIndex={subIndex} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubMenu;