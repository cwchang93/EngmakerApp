import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
// import styles from '../css.scss';
import { Input, Form, Button, Select } from 'antd';
const styles = require('../css.scss');

interface I_Props_FormInput {
    title?: string;
    placeholder?: string;
    disabled: boolean;
    className?: string;
    onChange?: any;
}

const FormInput: React.FC<I_Props_FormInput> = props => {
    const { title, placeholder, disabled } = props;
    return (
        <div className="formInput">
            {title ? <span>{title}</span> : null}
            <div className="inputWrap">
                <Input
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={e => {
                        props.onChange && props.onChange(e);
                    }}
                />
            </div>
        </div>
    );
};

const Module: React.FC = (props: any) => {
    const classnames = 'EnrollList';
    const cx: any = classNames.bind(styles);
    console.log(props);
    const [hosted, setHosted] = useState(false);

    const [topic, setTopic] = useState(props.topic);

    const [questionsNum, setQuestionsNum] = useState(0);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        props.host ? setHosted(true) : setHosted(false);
    }, []);

    const addQuestions = () => {
        const questionNum: number = questionsNum + 1;

        setQuestionsNum(questionNum);
        console.log('num', questionNum);
        const q = questions;
        q.push(`Question ${questionNum}`);
        setQuestions(q);
        console.log('questions', questions);
    };

    const deleteQuestion = (idx: number) => {
        const newQuestionArr = [...questions];
        for (let i = 0; i < newQuestionArr.length; i++) {
            if (i === idx) {
                newQuestionArr.splice(i, 1);
            }
        }
        setQuestions(newQuestionArr);
    };

    return (
        <div
            className={cx(classnames, {
                [`${classnames}_modify`]: true,
            })}
        >
            {/* <Form>
                <Form.Item label="Host"> */}
            {/* <div>
                <div className="inputTitle"> */}
            <div className="inputContainer">
                {/* <FormInput title="Date" placeholder={props.date} disabled={true} />
                <FormInput title="Host" placeholder={props.host} disabled={true} />
                <FormInput
                    title="Topic"
                    placeholder={props.topic}
                    disabled={false}
                    onChange={(e: any) => {
                        setTopic(e.target.value);
                        console.log('topic', topic);
                    }}
                />
                <FormInput title="Link" disabled={false} /> */}
                {/* <div className="formInput">
                    <span>Discussion </span>
                    <Button type="primary" icon="plus" shape="circle" onClick={() => addQuestions()} />
                    <div className="inputWrap">
                        {questions.map((ele, i) => {
                            return (
                                <div key={ele} className="questionWrap">
                                    <span>{ele}</span>{' '}
                                    <Button type="danger" icon="close" onClick={() => deleteQuestion(i)}></Button>
                                    <Input placeholder={ele} />;
                                </div>
                            );
                        })}
                    </div>
                </div> */}
                {/* Add Question
                </Button> */}
                <Form
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    // onSubmit={this.handleSubmit}
                >
                    <Form.Item label="Date">
                        {/* {getFieldDecorator('note', {
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(<Input />)} */}
                        <Input />
                        <Select
                            placeholder="Morning/Night"
                            // onChange={this.handleSelectChange}
                        >
                            <Option value="am">AM</Option>
                            <Option value="pm">PM</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Host">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Topic">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Link">
                        <Input />
                    </Form.Item>

                    <Form
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 15 }}
                        // onSubmit={this.handleSubmit}
                    >
                        {/* <Form.Item label="Discussion"> */}
                        <div className="discussionWrap">
                            <span className="discussion">Discussion</span>
                            <Button
                                type="primary"
                                icon="plus"
                                size={'default'}
                                onClick={() => {
                                    addQuestions();
                                }}
                            >
                                Add a Question
                            </Button>
                        </div>
                        <div className="inputWrap">
                            {questions.map((ele, i) => {
                                return (
                                    <div key={ele} className="questionWrap">
                                        <div className="inputQWrap">
                                            <div className="question">{ele}</div>
                                            <Input placeholder={ele} className="questionInput" />
                                            <Button
                                                type="danger"
                                                icon="close"
                                                onClick={() => deleteQuestion(i)}
                                            ></Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* </Form.Item> */}
                    </Form>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="mask"></div>
            {/* </div>
            </div> */}
            {/* </Form.Item>
            </Form> */}
        </div>
    );
};
/**
 * Props default value write here
 */
Module.defaultProps = {
    title: 'string', // 文字 || String
    date: '2019/09/01',
    host: 'Jinwei',
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */

export default Module;
