function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0s-.123 5.46-1 8c-.634 1.837-3 5-3 5h2.281S4.431 10.158 5 8.5C5.925 5.801 6 0 6 0H4zM16 0s.123 5.46 1 8c.634 1.837 3 5 3 5h-2.281S15.569 10.158 15 8.5C14.075 5.801 14 0 14 0h2z"
}));

export default SvgComponent;