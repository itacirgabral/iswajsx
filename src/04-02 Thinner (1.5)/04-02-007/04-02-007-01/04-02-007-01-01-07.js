function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 13l-4 4-.719-.719L26.594 13 23.28 9.719 24 9l4 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 15h-5v-1h5v1zM24 12h-5v-1h5v1zM16 13l-4 4-.719-.719L14.594 13 11.28 9.719 12 9l4 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 15H7v-1h5v1zM12 12H7v-1h5v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;