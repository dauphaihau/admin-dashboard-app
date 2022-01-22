import React from 'react';

import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar__item from '../../assets/JsonData/sidebar_routes.json'
import {Link} from "react-router-dom";

const SidebarItem = (props) => {
    const active = props.active ? 'active' : ''

    return (
        <div className='sidebar__item'>
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}/>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

const Sidebar = (props) => {

    const activeItem = sidebar__item.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo"/>
            </div>
            {
                sidebar__item.map((item, index) => (
                    <Link to={item.route}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default Sidebar;