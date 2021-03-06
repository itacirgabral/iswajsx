function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 22l-7-7-7 7h14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v8.625a3.5 3.5 0 110 5.75V23a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h2zm2 9.5a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;