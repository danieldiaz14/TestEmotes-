import React from "react";

const Jumbotron = (props) => {
  const { header, lead } = props;

  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <h1 className="display-4">{header}</h1>
      <p className="lead">{lead}</p>
      <hr className="my-4" />
      {props.children}
    </div>
  );
};

export default Jumbotron;
