function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 12a26.434 26.434 0 0018.75-7.75l.5-.5-1.438-1.438-.5.5C34.38 7.247 28.265 8 21.5 8 14.735 8 8.621 7.246 4.187 2.812L1.408 0 0 1.406 2.75 4.25A26.434 26.434 0 0021.5 12z"
}));

export default SvgComponent;