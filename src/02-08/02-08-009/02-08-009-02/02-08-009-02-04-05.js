function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v14.5a1.5 1.5 0 01-1.5 1.5c-.414 0-.791-.166-1.063-.438L10 10.095V24a2 2 0 01-2 2 6 6 0 01-6-6H0a8 8 0 008 8 4 4 0 004-4v-9.063l2.031 2.032A3.48 3.48 0 0016.5 18a3.5 3.5 0 003.5-3.5V0h-2z"
}));

export default SvgComponent;