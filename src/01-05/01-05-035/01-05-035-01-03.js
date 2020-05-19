function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 5h8v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v3c4.97 0 9 2.239 9 5V5h2.125C9.346 2.066 5.038 0 0 0zM21.938 9.219L17 14.188V17l6.375-6.375-1.438-1.406z"
}));

export default SvgComponent;