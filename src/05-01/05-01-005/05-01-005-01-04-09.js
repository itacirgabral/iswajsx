function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 61,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M61 5H19v4h42V5zM9 4H8v7h1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM3 4H2v7h1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0zM15 4h-1v7h1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5a2.5 2.5 0 105 0 2.5 2.5 0 10-5 0z"
}));

export default SvgComponent;