function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M39.9 16H30V6.1l1.414 1.415v7.07h7.071L39.9 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.778 2.565a5 5 0 010 7.071l-2.121 2.121-1.414-1.414 2.121-2.121a3 3 0 000-4.243l-.707-.707a4 4 0 00-5.657 0l-9.9 9.9-1.414-1.415 2.829-2.828a3 3 0 00-4.243-4.243L13.03 8.93c-2.848 2.848-4.242 11.314-4.242 11.314L.302 11.757s8.465-1.394 11.313-4.242l4.243-4.243a5 5 0 017.07 0 4.946 4.946 0 011.415 2.829l4.243-4.243a6 6 0 018.485 0l.707.707z"
}));

export default SvgComponent;