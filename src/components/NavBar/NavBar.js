import styles from './NavBar.module.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
       return (
            <div className={styles.nav}>
                <div className={styles.icon}>
                    <p to="/"><span className="fa fa-tasks"></span></p>
                </div>
                <div className={styles.buttons}>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
       );
};

export default NavBar;