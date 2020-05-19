function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 8H0v2h13zM13.518 4.068L.96.704.443 2.635 13 6zM13 12L.443 15.365l.517 1.932 12.558-3.365z"
}));

export default SvgComponent;