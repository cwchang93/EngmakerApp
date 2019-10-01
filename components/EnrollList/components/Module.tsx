import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
// import styles from '../css.scss';
import { Input, Form, Button, Select } from 'antd';
import { setTitle } from '@root/redux/actions';
const styles = require('../css.scss');

interface I_Props_enroll {
    onClose: () => void;
    topic?: string;
    date?: string;
    host?: string;
}

const Module: React.FC<I_Props_enroll> = props => {
    const classnames = 'EnrollList';
    const cx: any = classNames.bind(styles);
    console.log(props);
    const [hosted, setHosted] = useState(false);

    const [topic, setTopic] = useState(props.topic);

    const [questionsNum, setQuestionsNum] = useState(0);
    const [questions, setQuestions] = useState<any[]>([]);
    const [input, setInput] = useState<any[]>([]);

    const [editQ, setEditQ] = useState<boolean[]>([]);

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
        const newInput = [...input];
        for (let i = 0; i < newQuestionArr.length; i++) {
            if (i === idx) {
                newQuestionArr.splice(i, 1);
                newInput.splice(i, 1);
            }
        }
        setInput(newInput);
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
            <div className="crossWrap">
                <Button
                    icon="cross"
                    shape="round"
                    onClick={() => {
                        console.log('cross');
                        props.onClose && props.onClose();
                    }}
                />
                {/* }
                {/* /> */}
            </div>
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
                        <Input disabled={props.date ? true : false} placeholder={props.date} />
                        <Select
                            placeholder="Morning/Night"
                            // onChange={this.handleSelectChange}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Host">
                        <Input disabled={props.host ? true : false} placeholder={props.host} />
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
                        </div>
                        <div className="inputWrap">
                            {questions.map((ele, i) => {
                                return (
                                    <div key={ele} className="questionWrap">
                                        <div className="inputQWrap">
                                            <div className="question">Question{i + 1}:</div>
                                            <div className="insideWrap">
                                                <Input
                                                    placeholder={`Question ${i + 1}`}
                                                    className="questionInput"
                                                    onChange={e => {
                                                        const newInput = [...input];
                                                        newInput[i] = e.target.value;
                                                        setInput(newInput);
                                                        console.log('input', input);
                                                    }}
                                                    disabled={editQ[i]}
                                                />
                                                {/* <Button
                                                    type="primary"
                                                    icon={editQ[i] ? 'edit' : 'check'}
                                                    onClick={() => {
                                                        // deleteQuestion(i);
                                                        // setqTitle(!qtitle)
                                                        const editArr = [...editQ];
                                                        editArr[i] = !editQ[i];
                                                        setEditQ(editArr);
                                                    }}
                                                ></Button> */}
                                                <Button
                                                    type="danger"
                                                    icon="close"
                                                    onClick={() => {
                                                        deleteQuestion(i);
                                                    }}
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* </Form.Item> */}
                    </Form>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button
                            type="primary"
                            icon="plus"
                            size={'default'}
                            onClick={() => {
                                addQuestions();
                                const newArr = [...input];
                                newArr.push('');
                                setInput(newArr);
                            }}
                        >
                            Add a Question
                        </Button>

                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={() => {
                                console.log('questions: ', questions);
                                console.log('input: ', input);
                            }}
                        >
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
    date: '2019/09/01',
    host: 'Jinwei',
};
/**
 * Typechecking with proptypes, is a place to define prop api. [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
 */

export default Module;
