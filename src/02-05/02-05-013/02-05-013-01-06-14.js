function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13.1V23h9.9l-2.011-2.01H2.01V15.11L0 13.101z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 17.343L20.506 1.08l1.414 1.414L5.657 18.757l-1.414-1.414zM7 0L1.5 5.5 7 11V9.586L2.914 5.5 7 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 16C18 9.925 13.075 5 7 5v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;