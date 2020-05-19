function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17h15v13H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 19h11v9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3v12h2V3h-2zM14 0v15h2V0h-2zM1.406 9.594L0 11l4 4h2.844L1.406 9.594zM27.594 15.594L22 21.188V24l7-7-1.406-1.406z"
}));

export default SvgComponent;