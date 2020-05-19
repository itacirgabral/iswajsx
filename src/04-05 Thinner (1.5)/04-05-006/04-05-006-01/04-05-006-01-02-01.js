function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 20c-2.216 0-4 1.784-4 4 0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4h-7zm-2.5 4H14v4.313c-1.453-.548-2.5-2.263-2.5-4.313zm3.5 0h2v4.5h-2V24zm3 0h2v4.5h-2V24zm3 0h2.5c0 2.05-1.047 3.765-2.5 4.313V24z"
}));

export default SvgComponent;