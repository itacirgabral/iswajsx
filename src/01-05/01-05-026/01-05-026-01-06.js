function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0l6 6v21H6V6l6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 10v3H6v-3h12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.469 2.219L7 6.75 6 10 .344 4.344l2.125-2.125z"
}));

export default SvgComponent;