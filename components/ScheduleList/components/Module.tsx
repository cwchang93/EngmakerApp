import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import styles from '../css.scss';
import IcXicn from "@components/ic_xicn";

const styles = require("../css.scss");

interface props {
  mode: string;
}

const Module: React.FC = (props: any) => {
  const classnames = "ScheduleList";
  const cx: any = classNames.bind(styles);
  const [questionToggle, setQuestionToggle] = useState(true);

  const participantsArr: Array<string> = [
    "Jinwei",
    "JK",
    "Xinmedia",
    "Xinmedia",
    "Xinmedia"
  ];

  const questionArr: Array<string> = [
    "How do you think about this issue?",
    "What's your tips for getting girls attraction?"
  ];

  const mode: string = props.mode;

  return (
    <div className={cx(classnames, mode)}>
      <div className="scheduleWrap">
        <div className="timeSection">
          <span className="date">1</span>
          <span className="day">Sunday</span>
          <span className="time">7:00</span>
        </div>

        <div className="description">
          <div className="topic">How to pick up a girl?</div>
          <div className="hostSection">
            <span className="host">Host:&nbsp;</span>
            <span className="hostName">Jinwei</span>
          </div>
          <div className="participantSection">
            <span className="participantTitle">Participants:&nbsp;</span>
            {/* {participantsArr.length < 4 &&
            participantsArr.map((ele, i) => {
              return (
                <span key={ele} className="participant">
                  {ele}&nbsp;&nbsp;
                </span>
              );
            })} */}
            {/* {participantsArr.length >= 4 && */}
            {participantsArr.map((ele: any, i: number) => {
              if (i < 3) {
                return (
                  <span key={i} className="participant">
                    {ele}&nbsp;&nbsp;
                  </span>
                );
              } else {
                if (i === 3) {
                  return (
                    <div className="participantWrap">
                      <span key={i} className="participant">
                        {ele}&nbsp;&nbsp;
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <span key={i} className="participant">
                      {ele}&nbsp;&nbsp;
                    </span>
                  );
                }
              }
            })}
          </div>
          <div
            className="questionSection"
            onClick={() => {
              setQuestionToggle(!questionToggle);
            }}
          >
            <span className="question">
              Questions
              <IcXicn
                name="ic-arrow-down"
                className={cx({ ["arrowUp"]: questionToggle })}
              />
            </span>
          </div>
        </div>
      </div>

      <div
        className={cx({
          ["discussionWrap"]: true,
          ["displayNone"]: questionToggle
        })}
      >
        {questionArr.map((ele, i) => {
          return (
            <div key={i} className="discussion">
              Question{i + 1}: <span className="discussionContent">{ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/**
 * Props default value write here
 */
Module.defaultProps = {
  title: "string" // 文字 || String
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */
Module.propTypes = {
  title: PropTypes.string.isRequired
};

export default Module;
