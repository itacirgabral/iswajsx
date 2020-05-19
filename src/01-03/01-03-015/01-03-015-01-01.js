function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 4h15v15H15z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M17 6h11v11H17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v2h6V4H0zm10 0v2h5V4h-5zM15 6L.5 9.875l.531 1.938L15 8.092V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.719.688L5 1.688 15 19v-3.969L6.719.687z"
}));

export default SvgComponent;