function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l7 7h-2l-5-5-5 5h-2l7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v11a1 1 0 001 1c.276 0 .538-.1.719-.281L7 8.438V21a1 1 0 001 1c.276 0 .538-.1.719-.281L12 18.437V29a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6h-3a5 5 0 01-5-5v-5.781A2.98 2.98 0 018 24a3 3 0 01-3-3v-7.781A2.98 2.98 0 013 14a3 3 0 01-3-3V0h2z"
}));

export default SvgComponent;