function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0C0 0 0 8 0 8c0 .357.034.678.094 1H3c0-5 9-5 9-5v11h8V0h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 1h3v13h-3z"
}));

export default SvgComponent;