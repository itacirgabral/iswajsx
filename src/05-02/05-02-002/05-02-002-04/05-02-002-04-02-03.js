function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.335 3.466l4.33-2.5 24 41.569-4.33 2.5-24-41.57z"
}));

export default SvgComponent;