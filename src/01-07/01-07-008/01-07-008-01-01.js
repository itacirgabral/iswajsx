function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h15v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 17h11v11H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3v12h2V3h-2zM14 0v15h2V0h-2zM1.406 9.594L0 11l6 6v-2h.844L1.406 9.594zM27.594 15.594L21 22.188V25l8-8-1.406-1.406z"
}));

export default SvgComponent;