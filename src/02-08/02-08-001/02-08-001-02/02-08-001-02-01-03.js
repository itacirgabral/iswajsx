function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.1 16L10 6.1V16H.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.222 2.565a5 5 0 000 7.071l2.121 2.121 1.414-1.414-2.121-2.121a3 3 0 010-4.243l.707-.707a4 4 0 015.657 0l6.364 6.364c2.848 2.848 4.243 11.314 4.243 11.314l8.485-8.486s-8.466-1.394-11.314-4.242l-6.364-6.364a6 6 0 00-8.485 0l-.707.707z"
}));

export default SvgComponent;