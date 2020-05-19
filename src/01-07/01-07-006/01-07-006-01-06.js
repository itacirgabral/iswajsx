function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h15v13H0zM11.594 3.406l1.437 1.406L2.812 15H0L11.594 3.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v15H6V0h2zM19.594 9.594L21 11l-4 4h-2.844l5.438-5.406z"
}));

export default SvgComponent;