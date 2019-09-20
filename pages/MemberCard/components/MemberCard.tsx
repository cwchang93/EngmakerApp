import * as React from "react";
import { Avatar, Card } from "antd";

const MemberCard = (props: any) => {
  return (
    <div className="memberCard" id={props.member} onClick={props.showModal} >
      <Card style={{ width: 200 }} bordered={false} hoverable={true}>
        <Avatar size={80} icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div className="memberContent" style={{ marginTop: '10px' }}>
          <p>{props.member}</p>
        </div>
      </Card>
    </div>
  );
};

export default MemberCard