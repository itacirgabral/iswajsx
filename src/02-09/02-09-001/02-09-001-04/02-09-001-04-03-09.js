function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46 3l-1.5 1.5v9h-9L34 15h12V3zM21.5 0a26.434 26.434 0 0118.75 7.75l.5.5-1.438 1.438-.5-.5C34.38 4.753 28.265 2 21.5 2 14.735 2 8.621 4.754 4.187 9.188L1.408 12 0 10.594 2.75 7.75A26.434 26.434 0 0121.5 0z"
}));

export default SvgComponent;