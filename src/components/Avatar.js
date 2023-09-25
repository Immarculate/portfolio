import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={'https://res.cloudinary.com/dvfgovtow/image/upload/v1695664529/immarculateremovebg_t8jpkl.png'} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;