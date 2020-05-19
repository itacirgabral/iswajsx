function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 10h-4V9h4v1zM18 4h-4V3h4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 9.5L17.5 13l-.688-.719 2.75-2.781-2.968-3 2.968-3-2.75-2.781L17.5 0 21 3.5l-3 3 3 3zM4 10H0V9h4v1zM4 4H0V3h4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 9.5L3.5 13l-.688-.719L5.563 9.5l-2.968-3 2.969-3L2.813.719 3.5 0 7 3.5l-3 3 3 3z"
}));

export default SvgComponent;