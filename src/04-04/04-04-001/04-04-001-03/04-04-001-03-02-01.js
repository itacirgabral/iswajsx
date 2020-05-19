function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5v2h5V5H0zm12 0v2h5V5h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0v3.594L4.969 1.063 3.562 2.468 7.095 6 3.562 9.531l1.407 1.406L7.5 8.408V12h2V8.406l2.531 2.531 1.406-1.406L9.908 6l3.53-3.531-1.406-1.406L9.5 3.592V0h-2z"
}));

export default SvgComponent;