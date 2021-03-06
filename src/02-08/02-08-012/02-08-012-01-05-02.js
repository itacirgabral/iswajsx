function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5.5L13 5H4L8.5.5zm0 .969L5.687 4.312h5.625L8.5 1.47zM9 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3S8 18.657 8 17V5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 1.469l2.813 2.843H5.686L8.5 1.47z",
  fill: "#fff"
}));

export default SvgComponent;