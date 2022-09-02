import React from 'react';
import Header from '../Header/Header';
import clsx from 'clsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={clsx(styles.container, styles.layout)}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
