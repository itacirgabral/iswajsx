function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v3h10.5a4.5 4.5 0 010 9 8.5 8.5 0 000 17H16c1.38 0 2.492-.731 3.531-1.469 1.54-1.093 2.24-3.128 3.782-4.218C24.25 22.648 25.256 22 26.5 22a4.5 4.5 0 014.5 4.5V34h2v-7.5a6.5 6.5 0 00-6.5-6.5c-1.795 0-3.417.73-4.594 1.906 0 0-2.973 3.094-4.906 3.094H8.5a4.5 4.5 0 010-9H9A8 8 0 109 0H0z"
}));

export default SvgComponent;