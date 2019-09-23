import * as React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import { Button, Tabs, Input, Icon } from 'antd';

import '../css.scss';

enum From {
    Login_N = 'Login_UserName',
    Login_P = 'Login_UserPass',
    SignUp_N = 'SignUp_UserName',
    SignUp_P = 'SignUp_UserPass',
    SignUp_PV = 'SignUp_UserPass_verify',
}

interface hd_test_props {
    class?: string;
    children?: any;
    action?: any;
}

const Module: React.FC<hd_test_props> = props => {
    const classname = 'hd_test';
    const { children, action } = props;
    const { loginState } = useSelector((state: { loginState: any }) => state);
    const [logPage, setlogPage] = React.useState(false);
    const [fromdata, setfromdata] = React.useState(new Map());
    const [tabs, settabs] = React.useState(1);
    // console.log('logState', loginState.logState);
    // console.log('alert', loginState.alert);

    const login_props = {
        style: { borderColor: '#52004e', backgroundColor: '#52004e' },
        onClick: () => {
            setlogPage(true);
        },
    };

    const logout_props = {
        style: { borderColor: '#000000', backgroundColor: '#000000', color: '#000000' },
        onClick: () => {
            action(actionTypes.LOGOUT_OK, { alert: '成功登出' });
        },
    };

    const submit_props = {
        style: { borderColor: '#52804e', backgroundColor: '#52804e' },
        onClick: () => {
            // console.log(fromdata.get(From.Login_N), fromdata.get(From.Login_P));
            action(actionTypes.LOGIN, { userID: fromdata.get(From.Login_N), userPass: fromdata.get(From.Login_P) });
        },
    };

    const Change_props = {
        style: { color: '#000000' },
        onClick: () => {
            settabs(() => 3);
        },
    };

    const sign_up_props = {
        style: { backgroundColor: '#de4a3b', borderColor: '#de4a3b' },
        onClick: () => {},
    };

    const FaceBook = {
        style: { backgroundColor: '#3b5998', borderColor: '#3b5998' },
        onClick: () => {},
    };

    const My_web = {
        style: { backgroundColor: '#050505', borderColor: '#050505' },
        onClick: () => {
            settabs(() => 2);
        },
    };

    const google = {
        style: { backgroundColor: '#de4a3b', borderColor: '#de4a3b' },
        onClick: () => {
            action(actionTypes.LOGIN_GOOGLE);
        },
    };

    const onTabClick = (key: number) => {
        settabs(() => key);
    };

    const Fromdata = (set: string, data: string) => {
        setfromdata(pre => {
            return pre.set(set, data);
        });
    };

    return (
        <div className={cx(classname)}>
            <div>{children}</div>
            <div className={cx('icon', { none: !(loginState.logState === actionTypes.LOGIN_OK) })}>
                😎 Hello~ {loginState.data && loginState.data.name}
            </div>
            {loginState.logState === actionTypes.LOGIN_OK ? (
                <Button type="primary" {...logout_props} ghost>
                    Logout
                </Button>
            ) : (
                <Button type="primary" {...login_props}>
                    Login
                </Button>
            )}
            <div
                className={cx('login_page', { none: !logPage || loginState.logState === actionTypes.LOGIN_OK })}
                onMouseDown={(e: any) => {
                    e.target.className === 'login_page' && setlogPage(false);
                }}
            >
                <div>
                    <Tabs activeKey={tabs.toString()} onTabClick={onTabClick}>
                        <Tabs.TabPane tab="Sign" key="1">
                            <div className="auth">
                                <Button type="primary" {...google}>
                                    Google +
                                </Button>
                                <Button type="primary" {...FaceBook}>
                                    FaceBook
                                </Button>
                                <Button type="primary" {...My_web}>
                                    Web
                                </Button>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Sign in" key="2">
                            <div className="sign in">
                                <div>
                                    <div>UserName:</div>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="username"
                                        onChange={e => {
                                            Fromdata(From.Login_N, e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <div>UserPass:</div>
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="password"
                                        onChange={e => {
                                            Fromdata(From.Login_P, e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="last">
                                    <Button type="primary" {...submit_props}>
                                        Submit
                                    </Button>
                                    <Button type="link" {...Change_props}>
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Sign Up" key="3">
                            <div className="sign up">
                                <div>
                                    <div>UserName:</div>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="username"
                                        onChange={e => {
                                            Fromdata(From.SignUp_N, e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <div>UserPass:</div>
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="password"
                                        onChange={e => {
                                            Fromdata(From.SignUp_P, e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <div>AgingPass:</div>
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="password"
                                        onChange={e => {
                                            Fromdata(From.SignUp_PV, e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="last">
                                    <Button type="primary" {...sign_up_props}>
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>

            <div
                className={cx('wait_page', { none: !(loginState.logState === actionTypes.LOGIN) })}
                data-alert={loginState.googleProvider}
            />
            <div className={cx('alert_tool', { none: !loginState.alert })} key={`alert_tool_${loginState.alert}`}>
                <span>{loginState.alert}</span>
            </div>
        </div>
    );
};
export default Module;
