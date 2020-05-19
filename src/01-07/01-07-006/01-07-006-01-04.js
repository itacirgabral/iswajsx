function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17h15v13H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 19h11v9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.406 3.406L7.97 4.812 18.187 15H21L9.406 3.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v15h2V0h-2zM1.406 9.594L0 11l4 4h2.844L1.406 9.594z"
}));

export default SvgComponent;