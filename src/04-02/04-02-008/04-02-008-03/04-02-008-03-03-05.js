function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 3.5L4.5 7l-.719-.719L6.593 3.5 3.781.719 4.5 0 8 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 3v5h1V4h4V3H0z"
}));

export default SvgComponent;