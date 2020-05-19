function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 20l-8-8-8 8h16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v14.5A1.5 1.5 0 003.5 16c.414 0 .791-.166 1.063-.438L10 10.095V24a2 2 0 002 2c1.657 0 3-2.686 3-6h8a8 8 0 01-8 8h-3a4 4 0 01-4-4v-9.063L5.969 16.97A3.48 3.48 0 013.5 18 3.5 3.5 0 010 14.5V0h2z"
}));

export default SvgComponent;