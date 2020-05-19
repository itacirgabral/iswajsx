function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 7v3H7v2h3v3H7v2h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3v-2h-3V7h-2v3h-3V7h-2zm2 5h3v3h-3v-3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M12 12h3v3h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.188 14.219L.78 15.625l10.594 10.594 1.406-1.407L2.187 14.22zM15.625.781l-1.406 1.406 10.594 10.594 1.406-1.406L15.625.781z"
}));

export default SvgComponent;