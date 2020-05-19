function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 22.343L1.414 3.958 0 5.372l18.385 18.385 1.414-1.414zM14 13l5.5-5.5L25 13H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1 28l9.9-9.9V28h-9.9zM9 24c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H7v1h2zM7 6L12.5.5 18 6H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H0v1h2z"
}));

export default SvgComponent;