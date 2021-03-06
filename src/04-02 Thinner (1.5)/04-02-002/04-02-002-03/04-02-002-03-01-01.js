function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 14l5-5-.719-.719L11.594 13H5v1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.406 11l4.313-4.281L14 6l-4 4H5v1h5.406zM23 14l-5-5 .719-.719L23.406 13H30v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.594 11L20.28 6.719 21 6l4 4h5v1h-5.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;