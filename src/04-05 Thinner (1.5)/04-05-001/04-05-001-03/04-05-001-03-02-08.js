function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a4 4 0 00-4 4v1.75h1V4c0-1.38 1.343-2.5 3-2.5s3 1.12 3 2.5v1.75h1V4a4 4 0 00-4-4zM7 4.25H0v1.5h7v-1.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 3a2 2 0 00-2 2v.75h4V5a2 2 0 00-2-2z"
}));

export default SvgComponent;