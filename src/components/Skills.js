import React, { Component } from "react";
import Avatar from "./Avatar";
import SkillsMenu from "./SkillsMenu";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}