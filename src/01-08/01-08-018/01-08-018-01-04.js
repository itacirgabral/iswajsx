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
  d: "M13 0h2v15h-2zM2 9L.594 10.406 5.187 15H8L2 9zM27.375 15.813L22 21.186V24l6.781-6.781-1.406-1.407z"
}));

export default SvgComponent;