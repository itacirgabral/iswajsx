function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v12h1V0H8zM0 2v1h5v9h1V2H0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 12V0H0v2h6v10h2z"
}));

export default SvgComponent;