function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.23.667l6.471 24.148-1.932.518L.3 1.185 2.23.667z"
}));

export default SvgComponent;