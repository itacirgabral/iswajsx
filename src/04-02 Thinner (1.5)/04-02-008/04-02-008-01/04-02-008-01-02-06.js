function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 7V1.344h-1V6h-4.656v1H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 .281L11.281 1l3.531 3.531.72-.718L12 .28zM7 7V1.344H6V6H1.344v1H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 .281L.281 1l3.531 3.531.72-.718L1 .28z"
}));

export default SvgComponent;