function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.779 7.32L24.927.85l1.294 4.83-24.148 6.47L.78 7.32z"
}));

export default SvgComponent;