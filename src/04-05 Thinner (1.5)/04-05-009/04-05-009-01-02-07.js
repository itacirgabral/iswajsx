function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 4L5 0l-.719.719L7.594 4 4.28 7.281 5 8l4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2H0v1h5V2zM5 5H0v1h5V5z"
}));

export default SvgComponent;