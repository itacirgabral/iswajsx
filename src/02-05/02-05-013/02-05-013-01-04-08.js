function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.343 4.243L1.08 20.506l1.414 1.414L18.757 5.657l-1.414-1.414zM11 7L5.5 1.5 0 7h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 9.9L13.1 0H23v9.9zM16 18C9.925 18 5 13.075 5 7h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;