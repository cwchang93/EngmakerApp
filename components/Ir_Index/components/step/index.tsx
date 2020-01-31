import React from 'react';
import { Steps, Icon } from 'antd';

const { Step } = Steps;
const Module: React.FC = () => {
    return (
        <Steps direction="vertical" current={1}>
            <Step
                title="寄出申請信至hr@chun-wei.com"
                description="來信敘明 1. 英文程度 2. 自介 3. 參與動機  4. 對讀書會的期待 5.帳號   PS. 請務必將line權限開放，否則找不到會直接跳過"
                icon={<Icon type="user" />}
            />
            <Step
                title="10-15mins 小會談"
                description="請密切注意Skype及Line，組員會和你約個時間聊聊天，會談中將使用skype螢幕分享功能，僅使用語音功能（不使用視訊，"
                icon={<Icon type="solution" />}
            />
            <Step
                title="通過了但有點猶豫？沒關係！考慮3天"
                description="希望加入者能遵守規範不要隨意退出"
                icon={<Icon type="loading" />}
            />
            <Step
                title="加入我們!"
                description="填寫會員資料及登記可參加英語會話的時間"
                icon={<Icon type="smile-o" />}
            />
        </Steps>
    );
};
export default Module;
