function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 70
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 70V7H9v63h2zM5 70V7H3v63h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 1.5A6.728 6.728 0 003 3.25V7h2v63h4V7h2V2.5c-1.02-.625-2.22-1-3.5-1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0c3.666 0 6.724 2.568 7.5 6h-1.156A6.729 6.729 0 007.5 1.5 6.729 6.729 0 001.156 6H0c.776-3.432 3.834-6 7.5-6z"
}));

export default SvgComponent;