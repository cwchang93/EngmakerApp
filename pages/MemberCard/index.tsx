import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import './css.scss';
import MemberCard from './components/Module'
const MyApp = () => {
    const classnames = 'MemberCard';

    return (
        <div className={cx(classnames)}>
            <Head>
                <title>MemberCard</title>
            </Head>
            <div className="title">MemberCard</div>
            <MemberCard />
        </div>
    );
};

export default MyApp;
