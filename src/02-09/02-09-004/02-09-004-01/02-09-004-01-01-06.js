function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M34 9.562l-12.124-7L31.438 0 34 9.562zM7 34c4.948 0 9-2 9-7 0-3-2-3-2-6s2-6 5-6h1c7 0 9-4 9.219-8.188l-1.782-1.03C27 12 24 13 20 13h-1c-3 0-7 3-7 8 0 3 3 4 3 6 0 0 1 5-8 5H0v2h7z"
}));

export default SvgComponent;