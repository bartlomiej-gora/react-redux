import React from 'react'
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./Commentdetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:00 PM" comment="This is great!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 7:00 PM" comment="Nah, what a dump" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00 AM" comment="I love it!" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));