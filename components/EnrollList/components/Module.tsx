import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import styles from '../css.scss';
const styles = require('../css.scss');

const Module: React.FC = (props: any) => {
    const classnames = 'EnrollList';
    const cx: any = classNames.bind(styles);

    return (
        <div
            className={cx(classnames, {
                [`${classnames}_modify`]: true,
            })}
        >
            <h3>{`Sample Component ${props.title}`}123</h3>
        </div>
    );
};
/**
 * Props default value write here
 */
Module.defaultProps = {
    title: 'string', // 文字 || String
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */
Module.propTypes = {};

export default Module;
