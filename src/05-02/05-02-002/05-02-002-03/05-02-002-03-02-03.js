function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.335 2.93l4.33-2.5 20 34.641-4.33 2.5-20-34.641z"
}));

export default SvgComponent;