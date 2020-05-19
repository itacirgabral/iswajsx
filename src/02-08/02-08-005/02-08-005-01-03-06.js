function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 17l-7 7-7-7h2l5 5 5-5h2zM11 0a4 4 0 014 4v6c0 2.539 3 7 3 7h-8s3-4.461 3-7V4a2 2 0 00-4 0v4H7V4a4 4 0 014-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 11v1H17v-1h10zm-16 0v1H0v-1h11z"
}));

export default SvgComponent;