function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 1C6.91 1 4 2.343 4 4s2.91 3 6.5 3S17 5.657 17 4s-2.91-3-6.5-3zm0 1.5c2.761 0 5 .672 5 1.5s-2.239 1.5-5 1.5-5-.672-5-1.5 2.239-1.5 5-1.5zM17 8a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3S18.38 7 17 7v1zM4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z"
}));

export default SvgComponent;