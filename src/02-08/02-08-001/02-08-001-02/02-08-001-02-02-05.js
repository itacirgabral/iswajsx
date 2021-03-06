function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0a6 6 0 00-6 6v10c0 2.981-4 8-4 8h10s-4-5.019-4-8V6a4 4 0 014-4 3 3 0 013 3v5h2V5a5 5 0 00-5-5zM0 24l9 9 9-9H0zm2.438 1h13.124L9 31.594 2.437 25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 25L9 31.594 15.563 25H2.437z",
  fill: "#fff"
}));

export default SvgComponent;