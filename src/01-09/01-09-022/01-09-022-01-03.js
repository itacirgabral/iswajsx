function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h15v15H7zM1 0v7h2V2h4v9h2V0H1zM5 14v2H2v3h5v2H0v-7h5z"
}));

export default SvgComponent;