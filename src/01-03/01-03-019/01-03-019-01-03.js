function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 15h15v15H3zM5 15H3V0h2v15zM7 6v5h2V8h2v7h2V6H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11l-5 8.656C2.983 19.673 0 24 0 26c0 0 0 3 3 3v-2s-1 0-1-1v-.188c.047-.344.25-1.144 1-2.156L9.719 12 8 11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.688 15L3 19.656v4L8 15H5.687z",
  fill: "#fff"
}));

export default SvgComponent;