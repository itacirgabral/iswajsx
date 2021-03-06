function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.05 1.98a6 6 0 000 8.484L3.464 9.05a4 4 0 115.657-5.657l.707.708a4.01 4.01 0 011.194 2.828L10.889 14c0 1.536.596 3.071 1.768 4.243l.707.707a6 6 0 008.485 0 8 8 0 000-11.314L20.435 9.05a6 6 0 010 8.486 4 4 0 01-5.657 0l-.707-.708A4.01 4.01 0 0112.878 14l.132-7.071a5.992 5.992 0 00-1.767-4.243l-.707-.707a6 6 0 00-8.486 0z"
}));

export default SvgComponent;