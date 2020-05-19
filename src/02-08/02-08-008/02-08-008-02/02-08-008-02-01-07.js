function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30.314 2H19v11.314L30.314 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.03.586l16.263 16.263a4 4 0 005.657 0c1.171-1.171.222-4.02-2.122-6.364l5.657-5.657a8 8 0 010 11.314l-2.121 2.121a6 6 0 01-8.485 0L.615 2 2.03.586z"
}));

export default SvgComponent;