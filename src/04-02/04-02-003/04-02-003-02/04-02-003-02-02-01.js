function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5v2h7V5H0zm14 0v2h7V5h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0v3.594L6.969 1.063 5.562 2.468 9.095 6 5.563 9.531l1.406 1.406L9.5 8.408V12h2V8.406l2.531 2.531 1.406-1.406L11.908 6l3.53-3.531-1.406-1.406-2.531 2.53V0h-2z"
}));

export default SvgComponent;