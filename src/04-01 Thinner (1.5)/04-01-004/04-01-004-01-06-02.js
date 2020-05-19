function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.188 0l.687.688L.687 6.875 0 6.156 6.188 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.875.688l1.438 1.437-6.188 6.156L.687 6.875 6.875.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.313 2.125L9 2.813 2.812 9l-.687-.719 6.188-6.156z"
}));

export default SvgComponent;