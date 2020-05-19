function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 8v2H1V8h17zM1 11l17 4.563-.5 1.937L.469 12.937 1 11zM17.5.5l.5 1.938L1 7 .469 5.062 17.5.5z"
}));

export default SvgComponent;