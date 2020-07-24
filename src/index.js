import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatarSrc={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentText="comment 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarSrc={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00PM"
          commentText="comment 2"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarSrc={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 1:00AM"
          commentText="comment 3"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
