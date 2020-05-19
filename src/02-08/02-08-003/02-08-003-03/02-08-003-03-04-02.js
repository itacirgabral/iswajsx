function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a4 4 0 014 4v1H9V4a3 3 0 00-3-3H5C3.343 1 2 2.79 2 5v5.406A2.98 2.98 0 013.5 10a3 3 0 010 6 2.98 2.98 0 01-1.5-.406v2.812A2.98 2.98 0 013.5 18a3 3 0 010 6 2.98 2.98 0 01-1.5-.406V34H0V5a5 5 0 015-5h1zM3.5 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
}));

export default SvgComponent;