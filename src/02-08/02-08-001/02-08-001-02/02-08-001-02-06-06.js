function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 15l-9 9-9-9h2l7 7 7-7h2zM6 0a8 8 0 018 8c0 2.539 3 7 3 7H7s3-4.461 3-7c0-3.314-1.79-6-4-6s-4 3.582-4 8H0C0 4.477 2.686 0 6 0z"
}));

export default SvgComponent;