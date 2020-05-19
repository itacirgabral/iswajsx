function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h2.719l4.219-4.25L11.188 7H14L7 0zM6 7v11h13V7h-2v9H8V7H6z"
}));

export default SvgComponent;