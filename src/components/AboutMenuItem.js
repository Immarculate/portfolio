// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import classNames from "classnames";
import "./AboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default AboutMenuItem;