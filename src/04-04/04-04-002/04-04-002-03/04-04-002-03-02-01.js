function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.125 0C2.041 3.63 5.072 6 8.5 6s6.459-2.37 8.375-6H.125zM4 2h9c-1.305 1.254-2.844 2-4.5 2C6.844 4 5.305 3.254 4 2z"
}));

export default SvgComponent;