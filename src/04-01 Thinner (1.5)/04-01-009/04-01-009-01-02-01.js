function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 44
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 3h18v2h-18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.203 0l-.719.719L20.797 8l.719-.688L14.203 0zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;