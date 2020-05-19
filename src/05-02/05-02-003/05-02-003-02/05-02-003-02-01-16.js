function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.463.481L.946 2.413l11.59 3.106.518-1.932L1.464.481z"
}));

export default SvgComponent;