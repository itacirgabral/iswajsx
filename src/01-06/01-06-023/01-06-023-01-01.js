function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 15h15v15H5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 17h11v11H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0h2v15h-2zM1.406 9.594L0 11l5 5v-1h1.813L1.405 9.594zM24.594 18.594L20 23.187V26l6-6-1.406-1.406z"
}));

export default SvgComponent;