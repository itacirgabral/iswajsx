function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 53,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M53 4H11v4h42V4zM9 0v7.071H7.984V1.016H1.929V0H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.586 4.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM5.464 2.121l-.707-.707L.515 5.657l.707.707 4.242-4.243z"
}));

export default SvgComponent;