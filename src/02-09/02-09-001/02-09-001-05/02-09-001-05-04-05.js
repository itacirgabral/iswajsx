function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 000 16h29a8 8 0 100-16h-8v2h8a6 6 0 016 6c0 2.21-2.686 4-6 4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h9V0H8z"
}));

export default SvgComponent;