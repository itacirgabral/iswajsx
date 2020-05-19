function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v15H0zM0 0h2v15H0zM11 5h2v10h-2V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.594 9.406L20 10.844l-5 5V15h-2l5.594-5.594z"
}));

export default SvgComponent;