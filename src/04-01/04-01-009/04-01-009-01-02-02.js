function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 44
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 3h18v2h-18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.797 0l.719.719L14.203 8l-.719-.688L20.797 0zM17.5 9C7.835 9 0 16.835 0 26.5S7.835 44 17.5 44 35 36.165 35 26.5 27.165 9 17.5 9zm0 2C26.06 11 33 17.94 33 26.5 33 35.06 26.06 42 17.5 42 8.94 42 2 35.06 2 26.5 2 17.94 8.94 11 17.5 11z"
}));

export default SvgComponent;