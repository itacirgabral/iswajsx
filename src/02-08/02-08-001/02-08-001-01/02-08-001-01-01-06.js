function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 17H0l7 7 7-7zM4 0a4 4 0 014 4v6c0 2.539 3 7 3 7H3s3-4.461 3-7V4a2 2 0 00-2-2 1 1 0 00-1 1v6H1V3a3 3 0 013-3z"
}));

export default SvgComponent;