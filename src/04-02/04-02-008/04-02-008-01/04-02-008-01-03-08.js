function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v5.656H6V1H1.344V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.813 2.469L.28 6 1 6.719l3.531-3.532-.718-.718z"
}));

export default SvgComponent;