function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 13.5L3 18h9l-4.5-4.5zm0 .969l2.813 2.844H4.686L7.5 14.469z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4H5a5 5 0 01-5-5V0h1zM12.5.5L8 5h9L12.5.5zm0 .969l2.813 2.843H9.686L12.5 1.47zM12 5v13a4 4 0 004 4 5 5 0 005-5h-5c0 1.657-.672 3-1.5 3S13 18.657 13 17V5h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 14.469l-2.813 2.844h5.625L7.5 14.469zM12.5 1.469L9.687 4.312h5.626L12.5 1.47z",
  fill: "#fff"
}));

export default SvgComponent;