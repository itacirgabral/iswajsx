function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 73
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 73V10h2v63H2zM8 73V10h2v63H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 .781L4.687 5H12V.781zM2 7v3h2v63h4V10h2V7H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.406 0L0 5.438V7h12V5H4.687L12 .781V0H9.406z"
}));

export default SvgComponent;