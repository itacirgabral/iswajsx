function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 4,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v3.182H2.984V1.724L.818 3.889l-.707-.707 2.165-2.166H.818V0H4z"
}));

export default SvgComponent;