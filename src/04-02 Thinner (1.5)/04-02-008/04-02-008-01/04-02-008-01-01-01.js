function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 9l-4 4 .719.719L12 10.406l3.281 3.313L16 13l-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 13v5h1v-5h-1zM23 9l-4 4 .719.719L23 10.406l3.281 3.313L27 13l-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 13v5h1v-5h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;