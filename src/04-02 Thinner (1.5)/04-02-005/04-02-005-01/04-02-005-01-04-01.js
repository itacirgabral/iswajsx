function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 1.79 0 4v2h9V4c0-2.21-2.015-4-4.5-4zm0 1.5C6.433 1.5 8 2.62 8 4v.5H1V4c0-1.38 1.567-2.5 3.5-2.5zM16.5 0C14.015 0 12 1.79 12 4v2h9V4c0-2.21-2.015-4-4.5-4zm0 1.5C18.433 1.5 20 2.62 20 4v.5h-7V4c0-1.38 1.567-2.5 3.5-2.5z"
}));

export default SvgComponent;