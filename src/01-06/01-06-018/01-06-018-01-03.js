function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.75 1.563c-.228-.021-.485.047-.75.312 0 0-.162.193-.25.281L12.875 4 15 6.125 17.125 4s.707-.7 0-1.406c-.354-.354-.338-.37-.25-.281l-.469-.438s-.276-.278-.656-.313z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.831 1.88s1.415 1.413 0 2.828l-2.828 2.828L11.467 4l2.829-2.828s1.414-1.414 2.828 0l.707.707zm-.707.706l-.707-.707s-.707-.707-1.414 0L12.882 4l2.121 2.122L17.124 4s.707-.707 0-1.414z"
}));

export default SvgComponent;