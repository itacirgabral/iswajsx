function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h12L9 6l-6 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2c2.022 0 3.714-2.532 4.281-6H6.844c-.346 2.9-1.259 5-2.344 5C3.12 24 2 20.642 2 16.5v-8C2 4.358 3.12 1 4.5 1c.957 0 1.77 1.624 2.188 4h3.906C9.888 2.06 8.32 0 6.5 0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 18h12l-6-6-6 6z"
}));

export default SvgComponent;