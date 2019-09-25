import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Button from "antd/es/button";
// console.log("ant", Button);
// import styles from '../css.scss';
const styles = require('../css.scss');
import IcXicn from '@components/ic_xicn';

interface I_props {
    initYearMonth: string;
}

// interface dateData {
//   date:
// }

// const dateData = [{
//   date: '2019-1-1',
//   host: 'Jinwei'

// }

// ]

const Module: React.FC<I_props> = props => {
    const classnames = 'Calendar';
    const cx: any = classNames.bind(styles);

    const initYearMonth = props.initYearMonth;
    const initYear = initYearMonth.split('-')[0];
    let initMonth = initYearMonth.split('-')[1];
    // 把月份去掉0
    initMonth[0] === '0' ? (initMonth = initMonth[1]) : (initMonth = initMonth);
    const [nowMonth, setNowMonth] = useState(parseInt(initMonth) - 1);

    const renderDate = new Date(parseInt(initYear), nowMonth);
    const renderYear = renderDate.getFullYear();
    const renderMonth = renderDate.getMonth() + 1;

    const renderPrev = new Date(parseInt(initYear), nowMonth - 1);
    const renderPrevYear = renderPrev.getFullYear();
    const renderPrevMonth = renderPrev.getMonth() + 1;

    const renderNext = new Date(parseInt(initYear), nowMonth + 1);
    const renderNextYear = renderNext.getFullYear();
    const renderNextMonth = renderNext.getMonth() + 1;

    const wkArr = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thr.', 'Fri.', 'Sat.'];

    const clickNextMonth = () => {
        console.log(typeof nowMonth);
        setNowMonth(nowMonth + 1);
    };

    const clickPrevMonth = () => {
        setNowMonth(nowMonth - 1);
    };

    console.log('nowMonth', nowMonth);
    console.log('renderDate', renderDate);

    const renderWeek = (): any => {
        return wkArr.map((ele, i) => {
            console.log('ele', ele);
            return (
                <div key={i} className="weekDay">
                    {ele}
                </div>
            );
        });
    };

    const renderEmptyDate = (): any => {
        const emptyNum = renderDate.getDay();
        const emptyArr = [];
        for (let i = 0; i < emptyNum; i++) {
            emptyArr.push(<div className="day disabled"></div>);
        }
        return emptyArr;
    };

    const mapDate = (): any => {
        const dateNum = new Date(renderYear, renderMonth, 0).getDate();
        const dateArr = [];
        for (let i = 0; i < dateNum; i++) {
            dateArr.push(
                <div
                    className="day"
                    id={`${renderYear}-${renderMonth}-${i + 1}`}
                    onClick={e => console.log(e.currentTarget)}
                >
                    <span className="dateNum">{i + 1}</span>
                    <img src="https://picsum.photos/25/25" style={{ borderRadius: '50%' }} />
                    <img src="https://picsum.photos/25/25" style={{ borderRadius: '50%' }} />
                    /
                    <img src="https://picsum.photos/25/25" style={{ borderRadius: '50%' }} />
                    {/* <img
            src="https://picsum.photos/25/25"
            style={{ borderRadius: "50%" }}
          /> */}
                    <div>
                        A
                        {/* <span>
              Host:
              <img
                src="https://picsum.photos/25/25"
                style={{ borderRadius: "50%" }}
              />
            </span> */}
                        <i className="fas fa-kiwi-bird"></i>
                        <div>Attendees: 3 </div>
                    </div>
                    <div>
                        P
                        {/* <span>
              Host:
              <img src="https://picsum.photos/25/25" />
            </span> */}
                        <div>Attendees: 10 </div>
                    </div>
                </div>,
            );
        }
        return dateArr;
    };

    return (
        <React.Fragment>
            <div
                className={cx(classnames, {
                    [`${classnames}_modify`]: true,
                })}
            >
                {/* <Button type="primary">Button</Button> */}
                {/* <button onClick={clickPrevMonth}>clickPrevMonth</button>
                <button onClick={clickNextMonth}>clickNextMonth</button> */}

                {/* <Module {...common} word={'❮'} />
                    {link('heavy-left-pointing-angle-quotation-mark-ornament')} */}

                <div className="headWrap">
                    <div className="headWrapItem" onClick={clickPrevMonth}>
                        <span className="leftArrow">
                            <IcXicn size="x1.5" word={'❮'} />
                        </span>
                        <span>
                            {renderPrevYear} {renderPrevMonth}
                        </span>
                    </div>
                    <div className="headWrapItem">
                        <span className="active">
                            {renderYear} {renderMonth}月
                        </span>
                    </div>
                    <div className="headWrapItem" onClick={clickNextMonth}>
                        <span className="rightArrow">
                            <IcXicn size="x1.5" word={'❮'} />
                        </span>
                        <span>
                            {renderNextYear} {renderNextMonth}月
                        </span>
                    </div>
                </div>

                <div className="bodyWrap">
                    <div className="wkDayWrap">{renderWeek()}</div>
                    <div className="dayWrap">
                        {renderEmptyDate()} {mapDate()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
/**
 * Props default value write here
 */
Module.defaultProps = {
    // title: "string" // 文字 || String
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */
Module.propTypes = {};

export default Module;
