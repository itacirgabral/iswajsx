function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.565 2.293a6 6 0 018.485 0 5.992 5.992 0 011.768 4.243l-.133 7.07a4.01 4.01 0 001.194 2.829l.707.707a3 3 0 004.242 0c2.734-2.734 3.367-6.533 1.415-8.485l1.414-1.414c2.734 2.733 2.1 7.799-1.414 11.313a5 5 0 01-7.071 0l-.708-.707a5.992 5.992 0 01-1.767-4.242l.132-7.071a4.01 4.01 0 00-1.193-2.829 4 4 0 00-5.657 5.657l2.122 2.121L4.686 12.9l-2.121-2.12a6 6 0 010-8.486z"
}));

export default SvgComponent;