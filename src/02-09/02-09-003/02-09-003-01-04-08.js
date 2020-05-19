function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 16a6 6 0 00-6-6H9V6a6 6 0 00-6-6H0v2h3c2.21 0 3.733 2.133 4 4l.563 4H6a3 3 0 103 3v-1.625L14 12c1.871.234 4 1.79 4 4v5h2v-5zM8 13a2 2 0 11-2-2l1.75.219L8 13z"
}));

export default SvgComponent;