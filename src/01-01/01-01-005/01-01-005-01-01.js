function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15v4h14v9H2v2h20V15H0zm15 1h6v13h-6V16zM20 0h2v15h-2z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M15 16h6v13h-6z"
}));

export default SvgComponent;