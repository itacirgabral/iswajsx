function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.656.5L11.187 4H0v2h12l2.656-2.656L17.312 6l1.407-1.406L14.656.5z"
}));

export default SvgComponent;