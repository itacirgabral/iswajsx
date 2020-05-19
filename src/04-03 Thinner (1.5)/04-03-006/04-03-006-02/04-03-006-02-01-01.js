function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 13V0H8v13zM13.932 13.518L17.297.96 15.365.443 12 13zM6 13L2.635.443.704.961l3.364 12.557z"
}));

export default SvgComponent;