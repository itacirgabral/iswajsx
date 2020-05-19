function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v33.313l14-14V35h2V14.5l-14 14V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v18.813l14-14V35h2V0L8 14V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v28.5l14-14V35h4V4.812l-14 14V0H2z",
  fill: "#fff"
}));

export default SvgComponent;