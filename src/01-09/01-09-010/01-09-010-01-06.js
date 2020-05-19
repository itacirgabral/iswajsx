function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h8v15H6zM0 15v6h2v-4h2v-2H0zM7 0h1v13H7zM10 2h1v11h-1zM13 4h1v9h-1zM0 26v4h4v-2H2v-2H0z"
}));

export default SvgComponent;