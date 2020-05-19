function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 5,
  height: 5
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.5L2.25.25l.719.719L1.938 2H5v1H1.937L2.97 4.031l-.719.719L0 2.5z"
}));

export default SvgComponent;