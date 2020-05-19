function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.125.563L0 1.5c1.789 2.02 4.043 3.25 6.5 3.25S11.211 3.52 13 1.5L11.875.562C10.591 2.21 8.66 3.25 6.5 3.25S2.41 2.21 1.125.562z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.125 7.438L0 6.5c1.789-2.019 4.043-3.25 6.5-3.25S11.211 4.481 13 6.5l-1.125.938C10.591 5.791 8.66 4.75 6.5 4.75S2.41 5.791 1.125 7.438z"
}));

export default SvgComponent;