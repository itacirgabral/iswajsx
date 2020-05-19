function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v5H5V1H1V0h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.531 1.75L.72 4.594l.687.687L4.25 2.47l-.719-.719zM3 11V6h1v4h4v1H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.594 5.719L4.75 8.53l.719.719L8.28 6.406l-.687-.687z"
}));

export default SvgComponent;