/* global fetch */
import { takeEvery, takeLatest, takeLeading, put, call, delay, take, fork, cancel } from 'redux-saga/effects';
import es6promise from 'es6-promise';

import actionTypes, { alert_list } from '@constants/actionType';
// import "isomorphic-unfetch";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { fireDb } from '@config/firebase';

es6promise.polyfill();

function* incrementAsync(action: any): any {
    console.log(action);
    const time = Date.now();
    console.log(time);
    yield delay(2000);
    yield put({ type: actionTypes.TIME_ASYNC, payload: { time: time } });
}

function* getUserAsync(action: any): any {
    console.log(action);
    const userid = action.payload.userID;
    const userJson = yield fetch(`https://api.github.com/users/${userid}`)
        .then(res => {
            if (res.status !== 200) throw res;
            return res.json();
        })
        .catch(err => {
            return {
                status: err.status,
                statusText: err.statusText,
            };
        });
    // yield delay(5000);
    if (userJson.status) {
        console.error('Fetch Failed');
        yield put({ type: actionTypes.SET_USER, payload: { userData: null } });
    } else yield put({ type: actionTypes.SET_USER, payload: { userData: userJson } });
}

function* login(payload: { userID: string; userPass: string }): any {
    const { userID, userPass } = payload;
    // console.log('ID', userID, 'Pass', userPass);
    const get = async () => {
        let Password: string;

        try {
            const ref = await fireDb.collection(userID).doc('user');
            const data: any = await ref.get();
            Password = await data.data().Password;
        } catch (err) {
            console.error('無此帳號'); // TypeError: failed to fetch
            return false;
        }

        return Password === userPass;
    };
    const user = yield get();
    console.log(user);
    if (user) {
        // const userdata = 123;
        // console.log(userdata);
        // yield put({ type: actionTypes.LOGIN_OK, payload: { alert: alert_list.Login, data: userdata } });
        yield put({ type: actionTypes.LOGIN_OK, payload: { alert: alert_list.Login } });
    } else {
        yield put({ type: actionTypes.LOGOUT_OK, payload: { alert: alert_list.Login_fail } });
    }
}

function* google(): any {
    yield put({ type: actionTypes.GOOGLE_ALERT, payload: { alert: 'google驗證中' } });

    const provider = new firebase.auth.GoogleAuthProvider();
    const user: any = yield firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result: any) {
            // const token = result.credential.accessToken;
            const user = result.user;
            return user;
        })
        .catch(function(e: any) {
            console.error(e, '錯誤登入');
            return false;
        });

    yield put({ type: actionTypes.GOOGLE_ALERT, payload: { alert: '載入使用者資訊' } });

    if (user) {
        const userdata = {
            name: user.displayName,
        };
        yield put({ type: actionTypes.LOGIN_OK, payload: { alert: alert_list.Login, data: userdata } });
    } else {
        yield put({ type: actionTypes.LOGOUT_OK, payload: { alert: alert_list.Login_fail } });
    }
}
function* google_out(): any {
    yield firebase.auth().signOut();
    const user = yield firebase.auth().currentUser;
    // console.log(user);
}
export default function* rootSaga() {
    yield takeLatest('FETCH_USER', getUserAsync);

    yield takeLeading(actionTypes.LOGIN_GOOGLE, google);

    yield takeLeading(actionTypes.LOGOUT_OK, google_out);

    yield takeEvery(actionTypes.TIME, incrementAsync);
    while (true) {
        const { payload }: any = yield take(actionTypes.LOGIN);
        yield call(login, payload);

        // yield take(actionTypes.LOGOUT_OK);
        // console.log('OK');
        // yield cancel(infinityTask);
    }
}
