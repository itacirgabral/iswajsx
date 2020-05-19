function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30.656 0C33.35 3.078 35 7.089 35 11.5 35 21.165 27.165 29 17.5 29S0 21.165 0 11.5C0 7.089 1.65 3.078 4.344 0L6.78 2.125C5.053 4.73 4 7.973 4 11.5 4 20.06 10.044 27 17.5 27 26.06 27 33 20.06 33 11.5c0-3.897-1.438-7.464-3.813-10.188L30.657 0z"
}));

export default SvgComponent;