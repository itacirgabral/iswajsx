function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v2h3.5a3.5 3.5 0 110 7H7a7 7 0 000 14h2.5a3.5 3.5 0 110 7H2v4h5.5a7.5 7.5 0 100-15H5a3 3 0 010-6h3.5A6.5 6.5 0 0015 6.5V5c0-2.761-2.462-5-5.5-5H6z"
}));

export default SvgComponent;