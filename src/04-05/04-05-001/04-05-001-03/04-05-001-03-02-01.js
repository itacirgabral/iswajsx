function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v2h4V4H0zm11 0v2h4V4h-4zM7.5 3a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0c-2.21 0-4 2.239-4 5v1h1V5a3 3 0 016 0v1h1V5c0-2.761-1.79-5-4-5z"
}));

export default SvgComponent;