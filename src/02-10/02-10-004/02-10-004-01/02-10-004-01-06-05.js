function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13h2l3.5 3.5L9 13h2l-5.5 5.5L0 13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 25c-1.92 0-3.517-2.3-4.156-5.5h1.875C7.604 22.142 8.478 24 9.5 24c1.38 0 2.5-3.358 2.5-7.5v-8C12 4.358 10.88 1 9.5 1 8.415 1 7.502 3.1 7.156 6H5.22C5.786 2.532 7.478 0 9.5 0h2C13.985 0 16 3.806 16 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h2l3.5 3.5L9 7h2l-5.5 5.5L0 7z"
}));

export default SvgComponent;