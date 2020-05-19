function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 21l-7 7h2l5-5 5 5h2l-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 0v11a1 1 0 01-1 1c-.276 0-.538-.1-.719-.281L21 8.438V21a1 1 0 01-1 1c-.276 0-.538-.1-.719-.281L16 18.437V29a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5v-5.781A2.98 2.98 0 0020 24a3 3 0 003-3v-7.781A2.98 2.98 0 0025 14a3 3 0 003-3V0h-2z"
}));

export default SvgComponent;