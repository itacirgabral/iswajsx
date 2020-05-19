function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 5,
  height: 5
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 0L.25 2.25l.719.719L2 1.938V5h1V1.937L4.031 2.97l.719-.719L2.5 0z"
}));

export default SvgComponent;