function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.594 2.406l1.437 1.406L3 13.813v1.938a8.055 8.055 0 00-2 2.375V13L11.594 2.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0v14.063a8.016 8.016 0 00-2 0V0h2zM19.594 9.594L21 11l-6.438 6.438a8.07 8.07 0 00-1.343-1.5l6.375-6.344z"
}));

export default SvgComponent;