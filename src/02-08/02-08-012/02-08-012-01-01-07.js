function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.9 9H17v9.9L26.9 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.15 6.879l13.436 13.435a3 3 0 004.242-4.243l4.243-4.243c1.953 1.953 1.636 5.435-.707 7.779l-2.121 2.12a5 5 0 01-7.071 0L.737 8.294 2.15 6.879z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.9.515l.707.707-6.364 6.364-.707-.707L26.899.515zm-12.021 12.02l.707.708L4.272 24.556l-.707-.707 11.314-11.313z"
}));

export default SvgComponent;