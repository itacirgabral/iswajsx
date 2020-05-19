function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3.5L3.5 0l.719.719L1.406 3.5 4.22 6.281 3.5 7 0 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 3v1h4v4h1V3H3zM13 3.5L16.5 0l.719.719L14.406 3.5l2.813 2.781L16.5 7 13 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3v1h4v4h1V3h-5z"
}));

export default SvgComponent;