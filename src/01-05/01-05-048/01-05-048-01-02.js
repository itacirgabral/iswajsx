function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v15h8V7H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 8h3v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.5.5L.094 1.938 8 9.813V7L1.5.5zM8 19.188l-6.5 6.468 1.438 1.407L8 22v-2.813z"
}));

export default SvgComponent;