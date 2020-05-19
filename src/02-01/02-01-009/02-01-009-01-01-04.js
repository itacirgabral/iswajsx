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
  d: "M24.813 14.219L14.219 24.813l1.406 1.406 10.594-10.594-1.407-1.406zM11.375.781L.781 11.375l1.406 1.406L12.781 2.187 11.375.782z"
}));

export default SvgComponent;