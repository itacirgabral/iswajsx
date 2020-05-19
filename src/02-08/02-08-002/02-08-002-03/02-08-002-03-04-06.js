function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 014 4v3.563A3.99 3.99 0 0110 7a4 4 0 014 4v3.563c.591-.342 1.267-.563 2-.563a4 4 0 014 4v11h-2V18a2 2 0 00-4 0v3h-2V11a2 2 0 00-4 0v3H6V4a2 2 0 00-4 0v4H0V4a4 4 0 014-4z"
}));

export default SvgComponent;