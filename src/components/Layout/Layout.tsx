import React from 'react';
import Header from '../Header/Header';
import clsx from 'clsx'
import styles from './Layout.module.scss'

type LayoutProps = {
  children: JSX.Element,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={clsx(styles.container, styles.layout)}>{children}</div>
        </>
    );
};

export default Layout;
