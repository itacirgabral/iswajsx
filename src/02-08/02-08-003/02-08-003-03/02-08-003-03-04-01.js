function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v5.406A2.98 2.98 0 006.5 10a3 3 0 000 6 2.98 2.98 0 001.5-.406v2.812A2.98 2.98 0 006.5 18a3 3 0 000 6 2.98 2.98 0 001.5-.406V34h2V5a5 5 0 00-5-5H4zm2.5 11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
}));

export default SvgComponent;