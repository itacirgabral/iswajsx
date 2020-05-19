function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.692 13.556L.398 8.726 31.308.444l1.294 4.83-30.91 8.282z"
}));

export default SvgComponent;