function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 61,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM52 7h1V0h-1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM58 7h1V0h-1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M61 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM46 7h1V0h-1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z"
}));

export default SvgComponent;