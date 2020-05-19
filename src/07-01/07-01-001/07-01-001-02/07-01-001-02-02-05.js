function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M47 3h27v8H0V3h27v6h20V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47 3v6H27V3h20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.594 0L43 5.438V7H31V5h7.313L31 .781V0h2.594z"
}));

export default SvgComponent;