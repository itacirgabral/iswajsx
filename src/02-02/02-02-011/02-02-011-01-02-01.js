function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 2.281l-5 5L2.719 8 7 3.719l4 4 4-4L19.281 8 20 7.281l-5-5-4 4-4-4zM0 0v1h22V0H0zM0 9v1h22V9H0z"
}));

export default SvgComponent;