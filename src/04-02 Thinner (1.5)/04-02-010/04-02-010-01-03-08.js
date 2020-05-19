function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0L5.78.719 8.594 3.5 5.812 6.313 6.5 7 10 3.5 6.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 3A3.5 3.5 0 000 6.5C0 7.784.377 8.978 1 10h2V8c-1.105 0-2-.672-2-1.5A2.5 2.5 0 013.5 4H6V3H3.5z"
}));

export default SvgComponent;