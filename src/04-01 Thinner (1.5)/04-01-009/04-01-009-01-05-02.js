function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h18v2H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.297 0l.719.719L5.703 8l-.719-.688L12.297 0z"
}));

export default SvgComponent;