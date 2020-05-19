function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 4.5L21 11h-2l-4.5-4.5L10 11H8l6.5-6.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v12c0 2.761 2.686 5 6 5 2.21 0 4-2.686 4-6h7a9 9 0 01-9 9H7c-3.866 0-7-3.582-7-8V0h1z"
}));

export default SvgComponent;