import * as React from 'react';
import classnames from 'classnames';
import '../css.scss';
import { Col, Row, Modal, Avatar, Descriptions } from 'antd';
const styles = require('../css.scss');
import MemberCard from './MemberCard';

interface Props {
    image?: string;
}
interface State {}

class Module extends React.Component {
    // const { className, size, word, color } = props;
    state = {
        visible: false,
        members: [
            {
                name: 'aaa',
                mail: 'aaa@aaa.com',
            },
            {
                name: 'bbb',
                mail: 'bbb@bbb.com',
            },
            {
                name: 'ccc',
                mail: 'ccc@ccc.com',
            },
            {
                name: 'ddd',
                mail: 'ddd@ddd.com',
            },
            {
                name: 'eee',
                mail: 'eee@eee.com',
            },
            {
                name: 'fff',
                mail: 'fff@fff.com',
            },
        ],
        memberModule: {
            name: '',
            mail: '',
        },
    };

    showModal = (e: any) => {
        const { members } = this.state;
        const detail: any = members.find(member => {
            return member.name === e.currentTarget.id;
        });

        this.setState({
            memberModule: {
                name: detail.name,
                mail: detail.mail,
            },
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { members, memberModule } = this.state;
        return (
            <div style={{ background: '#ECECEC', padding: '30px', display: 'flex', justifyContent: 'space-around' }}>
                {members.map((member, index) => {
                    return (
                        <MemberCard
                            showModal={(e: any) => this.showModal(e)}
                            key={`${member.mail + index + name}`}
                            member={member.name}
                        />
                    );
                })}

                <Modal visible={this.state.visible} centered={true} footer={null} onCancel={this.handleCancel}>
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        size={80}
                        icon="user"
                    />
                    <div className="modalContent">
                        <p>Name: {memberModule.name}</p>
                        <p>Skype Account: {memberModule.name}</p>
                        <p>Skype Name: {memberModule.name}</p>
                        <p>Line Name: {memberModule.name}</p>
                        <p>Gmail: {memberModule.mail}</p>
                        <p>Start Date: 2018-07-21</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Module;
