function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M43.284 1.866l-1-1.732-41.569 24 1 1.732 41.57-24z"
}));

export default SvgComponent;