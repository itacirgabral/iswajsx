function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8zM0 15h15v3H0zM15 0h2v15h-2zM24.188 3l-5.844 12h2.219L26 3.875 24.188 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 10l-5 5v2.813l6.438-6.407L28 10zM2.969 11.563l-.688.718L15 25v-1.438l-12.031-12z"
}));

export default SvgComponent;