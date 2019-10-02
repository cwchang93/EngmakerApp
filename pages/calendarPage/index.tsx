import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import './css.scss';
import Calendar from '@components/Calendar';

const MyApp = () => {
    const classnames = 'calendarPage';

    return (
        <div className={cx(classnames)}>
            <Head>
                <title>calendarPage</title>
            </Head>
            <div className="title">calendarPage</div>
            <div className="calendarPart">
                <Calendar initYearMonth="2019-09" />
            </div>
        </div>
    );
};

export default MyApp;
