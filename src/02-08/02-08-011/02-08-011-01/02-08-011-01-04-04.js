function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.435 2.293a6 6 0 00-8.485 0 5.992 5.992 0 00-1.768 4.243l.133 7.07a4.01 4.01 0 01-1.194 2.829l-.707.707a3 3 0 01-4.242 0c-2.734-2.734-3.367-6.533-1.415-8.485L2.343 7.243C-.39 9.976.243 15.042 3.757 18.556a5 5 0 007.071 0l.708-.707a5.992 5.992 0 001.767-4.242l-.132-7.071a4.01 4.01 0 011.193-2.829 4 4 0 015.657 5.657l-2.122 2.121 1.415 1.414 2.121-2.12a6 6 0 000-8.486z"
}));

export default SvgComponent;