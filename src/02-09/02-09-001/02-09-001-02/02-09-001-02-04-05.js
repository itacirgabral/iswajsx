function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 9c3.672 0 6.958-1.55 9.313-4l1.875-1.813-1.375-1.374-1.375 1.343C19.09 4.307 16.178 5 13 5c-3.153 0-6.043-.677-8.375-1.813L1.406 0 0 1.406l3.844 3.75C6.187 7.514 9.408 9 13 9z"
}));

export default SvgComponent;