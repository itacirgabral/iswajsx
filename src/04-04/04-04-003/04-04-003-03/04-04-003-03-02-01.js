function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.125 6C2.041 2.37 5.072 0 8.5 0s6.459 2.37 8.375 6H.125zM4 4h9c-1.305-1.254-2.844-2-4.5-2-1.656 0-3.195.746-4.5 2z"
}));

export default SvgComponent;