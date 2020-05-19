function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v5.656H7V1H2.344V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.586 4.243L3.05 7.778l-.707-.707L5.88 3.536l.707.707zM4.464 2.121L.93 5.657.222 4.95l3.535-3.536.707.707z"
}));

export default SvgComponent;