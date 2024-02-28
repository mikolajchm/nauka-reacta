import styles from './NavBar.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
       return (
            <div className={styles.nav}>
                <div className={styles.icon}>
                    <p to="/"><span className="fa fa-tasks"></span></p>
                </div>
                <div className={styles.buttons}>
                    <Link className={styles.link} to="/">Home</Link>    
                    <Link className={styles.link} to="/favorite">Favorite</Link>                 
                    <Link className={styles.link} to="/about">About</Link>
                </div>
            </div>
       );
};

export default NavBar;