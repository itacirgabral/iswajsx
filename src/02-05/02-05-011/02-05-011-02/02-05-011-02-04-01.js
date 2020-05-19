function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v17.5L0 5.5V26h2V10.312L14 22V0h-2z"
}));

export default SvgComponent;