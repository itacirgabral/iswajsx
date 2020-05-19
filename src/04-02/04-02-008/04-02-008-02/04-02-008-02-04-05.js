function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 7L0 3.5l.719-.719L3.5 5.594 6.281 2.78 7 3.5 3.5 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4V0h1v4H3z"
}));

export default SvgComponent;