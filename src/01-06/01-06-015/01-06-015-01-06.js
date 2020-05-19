function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 4a8 8 0 110 16A8 8 0 018 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.25 10a8.054 8.054 0 00-.188 3h15.876a8.054 8.054 0 00-.188-3H.25z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.156 0L21 2.813l-5.781 5.78A7.995 7.995 0 0012.656 5.5l5.5-5.5z"
}));

export default SvgComponent;