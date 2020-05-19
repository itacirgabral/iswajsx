function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v2h10V7zM.359 13.455l.517 1.932 9.66-2.589-.518-1.932zM.876.614L.358 2.545l9.66 2.589.517-1.932z"
}));

export default SvgComponent;