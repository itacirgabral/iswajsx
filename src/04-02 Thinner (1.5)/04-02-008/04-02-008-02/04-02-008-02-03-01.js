function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 3v4h1V3H3zM9 3v4h1V3H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0L0 3.5l.719.688L3.5 1.438l3 2.968 3-2.968 2.781 2.75L13 3.5 9.5 0l-3 3-3-3z"
}));

export default SvgComponent;