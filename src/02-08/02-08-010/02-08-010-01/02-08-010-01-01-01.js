function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7l7-7 7 7H0zM6 7v15a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2v-4.625a3.5 3.5 0 100-5.75V7H6zm4 5.5a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;