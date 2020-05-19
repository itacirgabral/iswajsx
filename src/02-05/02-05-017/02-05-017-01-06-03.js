function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M38 7v2H7V7h31zM7 15L0 8l7-7v2.844L2.844 8 7 12.156V15zM24 15l-4.5-4.5L15 15h1.406l3.094-3.094L22.594 15H24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1zM37 15l-4.5-4.5L28 15h1.406l3.094-3.094L35.594 15H37z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1z"
}));

export default SvgComponent;