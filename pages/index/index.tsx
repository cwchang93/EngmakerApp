import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import './css.scss';
import { fireDb } from '@config/firebase';
import { now } from 'moment';
// import { useRouter } from "next/router";
import Calendar from '@components/Calendar';
import { useEffect, useState } from 'react';
// import { write } from 'fs';

const Home = (props: any) => {
    const classnames = 'home_';
    const { countState, userState } = useSelector((state: { countState: any; userState: any }) => state);
    const { loginState } = useSelector((state: { loginState: any }) => state);
    const { calendarState } = useSelector((state: { calendarState: any }) => state);

    const [userid, setUserid] = React.useState('');

    const [calendarData, setCalendarData] = useState<string | undefined>(undefined);

    const { action } = props;
    console.log('out!!');
    useEffect(() => {
        // loginState.data && Write();
        console.log('calendarState', calendarState);
        console.log('loginState', loginState.logState);
        console.log('useEffect');

        loginState.logState === 'LOGIN_OK' && Read();

        // console.log('useEffect');
        // Write();
        // Read();
    }, [loginState.logState]);

    const fetchUser = () => {
        console.log('USER : ', userid);
        action('FETCH_USER', { userID: userid });
    };
    const Write = async () => {
        const ref = await fireDb.collection('test123').doc('test123');
        const document = {
            text: new Date(),
        };
        console.log('Writing');
        try {
            console.log('try');
            await ref.set(document);
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    // Write();
    // console.log('Read');
    const Read = async () => {
        const ref = await fireDb.collection('calendar').doc('schedule');
        // const ref = await fireDb.collection(',kljh').doc('calendarData');
        console.log('reading');
        try {
            const data = await ref.get();
            const newData = JSON.stringify(data.data()); // 要轉字串，因為object包的東西會不相等
            console.log('newData', newData);
            // console.log('calendarData', calendarData);
            if (newData !== calendarData) setCalendarData(newData);
            console.log('calendarDAta', calendarData);
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    // loginState && Read();

    const remove = async () => {
        const ref = await fireDb.collection('test').doc('test');
        try {
            await ref.set({});
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    // remove();
    const del = async () => {
        // const ref = await fireDb.collection('test').doc('test');
        try {
            await fireDb
                .collection('qweqwe')
                .doc('qwe')
                .delete();
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    // del();
    const update = async () => {
        const ref = await fireDb.collection('test').doc('test');
        const updates: any = {};
        updates['JW'] = 'qwe';
        updates['J'] = 'postData';
        try {
            await ref.update(updates);
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    // update();

    return (
        <div className={classNames(classnames)}>
            <Head>
                <title>首頁</title>
            </Head>
            <div className="title">首頁{countState.count}</div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                    style={{ padding: '5px', margin: '5px' }}
                    onClick={() => {
                        action(actionTypes.INCREMENT);
                        Write();
                    }}
                >
                    +1
                </button>
                <button
                    style={{ padding: '5px', margin: '5px' }}
                    onClick={() => {
                        action(actionTypes.DECREMENT);
                        console.log('cd', calendarData);
                    }}
                >
                    -1
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.RESET)}>
                    Reset
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.TIME_ASYNC)}>
                    Time Async
                </button>
            </div>
            <div className="input">
                <input type="text" onChange={e => setUserid(e.target.value)} />
                <button onClick={() => fetchUser()}>送出</button>
            </div>
            {userState.userData ? (
                <div className="userinfo">
                    {userState.userData.name || userState.userData.login}
                    <div>{userState.userData.id}</div>
                    <div>
                        <a href={userState.userData.url}>{userState.userData.url}</a>
                    </div>
                </div>
            ) : null}

            <div className="calendarPart">
                <Calendar initYearMonth="2019-09" />
            </div>
        </div>
    );
};

export default Home;
