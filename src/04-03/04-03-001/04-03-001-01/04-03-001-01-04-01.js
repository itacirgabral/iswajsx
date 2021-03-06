function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.844 19c-.554-.853-1.068-1.74-1.469-2.688a17.36 17.36 0 01-1.031-3.28A17.622 17.622 0 010 9.5c0-1.208.11-2.392.344-3.531a17.36 17.36 0 011.031-3.282C1.775 1.74 2.29.853 2.844 0 6.458 1.66 9 5.263 9 9.5S6.458 17.34 2.844 19z"
}));

export default SvgComponent;