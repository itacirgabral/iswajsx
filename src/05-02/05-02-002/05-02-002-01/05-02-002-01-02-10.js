function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.15 2.073L5.68 26.22.85 24.927 7.32.779l4.83 1.294z"
}));

export default SvgComponent;