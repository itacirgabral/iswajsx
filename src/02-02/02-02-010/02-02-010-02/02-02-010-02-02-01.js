function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 4.281l-5 5L.719 10 5 5.719l4 4 4-4L17.281 10 18 9.281l-5-5-4 4-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 .281l-5 5L.719 6 5 1.719l4 4 4-4L17.281 6 18 5.281l-5-5-4 4-4-4z"
}));

export default SvgComponent;