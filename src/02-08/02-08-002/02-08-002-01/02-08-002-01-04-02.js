function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0a4 4 0 014 4v1h-2V4a2 2 0 00-2-2h-1a3 3 0 00-3 3v10l-2.375-4.156A1.982 1.982 0 005 10a3 3 0 00-3 3v11H0V13a5 5 0 015-5c.73 0 1.41.221 2 .563V5a5 5 0 015-5h1z"
}));

export default SvgComponent;