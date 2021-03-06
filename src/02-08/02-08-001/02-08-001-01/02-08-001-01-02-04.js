function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.1V17h9.9L0 7.1zm1.016 2.431l6.453 6.453-6.475.022.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.092 2.15a4 4 0 00-5.657 0L9.192 6.394c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s1.034-5.276 2.829-7.071l4.242-4.243a2 2 0 012.829 0 1 1 0 010 1.414l-4.243 4.243 1.414 1.414 4.243-4.243a3 3 0 000-4.242z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 9.531l-.022 6.475 6.475-.022L1.016 9.53z",
  fill: "#fff"
}));

export default SvgComponent;