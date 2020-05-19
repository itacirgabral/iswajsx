function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8l5-5-.719-.719L6.594 7H0v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.406 5L9.72.719 9 0 5 4H0v1h5.406zM18 8l-5-5 .719-.719L18.406 7H25v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.594 5L15.28.719 16 0l4 4h5v1h-5.406z"
}));

export default SvgComponent;