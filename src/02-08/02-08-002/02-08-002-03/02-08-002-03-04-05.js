function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0a4 4 0 00-4 4v3.563A3.99 3.99 0 0010 7a4 4 0 00-4 4v3.563C5.409 14.22 4.733 14 4 14a4 4 0 00-4 4v11h2V18a2 2 0 014 0v3h2V11a2 2 0 014 0v3h2V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4z"
}));

export default SvgComponent;