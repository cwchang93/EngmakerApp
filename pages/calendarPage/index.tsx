import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import './css.scss';
import Calendar from '@components/Calendar';
import dayjs from 'dayjs';
// const dayjs = require('dayjs');

const MyApp = () => {
    const classnames = 'calendarPage';

    return (
        <div className={cx(classnames)}>
            <Head>
                <title>calendarPage</title>
            </Head>
            <div className="title">calendarPage</div>
            <div className="calendarPart">
                <Calendar initYearMonth={dayjs().format('YYYY-MM')} />
            </div>
        </div>
    );
};

export default MyApp;
