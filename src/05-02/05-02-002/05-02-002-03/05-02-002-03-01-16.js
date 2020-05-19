function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.94.857L.424 2.79 39.06 13.142l.518-1.932L.94.857z"
}));

export default SvgComponent;