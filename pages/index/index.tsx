import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import './css.scss';
import { fireDb } from '@config/firebase';
// import { useRouter } from "next/router";

const Home = (props: any) => {
    const classnames = 'home_';
    const { countState, userState } = useSelector((state: { countState: any; userState: any }) => state);

    const [userid, setUserid] = React.useState('');

    const { action } = props;

    const fetchUser = () => {
        console.log('USER : ', userid);
        action('FETCH_USER', { userID: userid });
    };
    const Write = async () => {
        const ref = await fireDb.collection('test').doc('test');
        const document = {
            text: 'This is a test message.',
        };
        try {
            await ref.set(document);
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    Write();
    const Read = async () => {
        // const ref = await fireDb.collection('test').doc('test');
        const ref = await fireDb.collection(',kljh').doc('calendarData');
        try {
            const data = await ref.get();

            console.log(data.data());
        } catch (e) {
            // TODO: error handling
            console.error(e);
        }
    };
    Read();
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
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.INCREMENT)}>
                    +1
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.DECREMENT)}>
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
        </div>
    );
};

export default Home;
