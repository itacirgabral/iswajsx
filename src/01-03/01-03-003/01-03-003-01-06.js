function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v15H7zM19.594 4.406L9 15h2.813l9.218-9.188-1.437-1.406zM7 17h15v13H7zM5 21v-2H0v6h6v-2H2v-2h3z"
}));

export default SvgComponent;