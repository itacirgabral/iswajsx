function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h8v18H8zM8 0v4H2v4H0V0h8zM20.25 6.938l-1.406 1.406L16 11.156V14l5.656-5.656-1.406-1.406z"
}));

export default SvgComponent;