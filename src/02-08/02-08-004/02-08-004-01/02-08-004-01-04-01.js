function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v6a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l.75-.75c.181-.18.443-.281.719-.281a1 1 0 011 1V23h2V9.5a3 3 0 00-3-3c-.828 0-1.582.332-2.125.875l-.75.75A2.996 2.996 0 015 9a3 3 0 01-3-3V0H0z"
}));

export default SvgComponent;