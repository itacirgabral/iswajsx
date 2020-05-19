function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.757 5.657L1.494 21.92.08 20.506 16.343 4.243l1.414 1.414zM10 17l5.5 5.5L21 17H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.1 0L22 9.9V0h-9.9zM5 6c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3V6h2z"
}));

export default SvgComponent;