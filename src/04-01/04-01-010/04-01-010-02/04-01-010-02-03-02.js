function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 4v2h18V4H3zM1.813 0L.405 1.406 3 4h2.813l-4-4z"
}));

export default SvgComponent;