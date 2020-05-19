function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v16l-8-8 8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 7v2h6.5a6.5 6.5 0 016.5 6.5 4.5 4.5 0 01-4.5 4.5H16a6 6 0 00-6 6c0 1.657.664 3.164 1.75 4.25l3.5 2.5A5.992 5.992 0 0117 37a4 4 0 01-4 4H0v4h11a8 8 0 005.656-13.656l-2.781-3.219A2.996 2.996 0 0113 26a2 2 0 012-2h10.5a8.5 8.5 0 000-17H19z"
}));

export default SvgComponent;