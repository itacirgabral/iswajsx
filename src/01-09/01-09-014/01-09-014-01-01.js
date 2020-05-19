function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 15h8v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 16h6v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 15c-3 0-3 3-3 3v2h2v-2c0-1 1-1 1-1h5v-2H3zM12 0h1v15h-1zM9 2h1v13H9zM6 4h1v11H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 19.156V20H0l8 8v-2.813l-6-6.03z"
}));

export default SvgComponent;