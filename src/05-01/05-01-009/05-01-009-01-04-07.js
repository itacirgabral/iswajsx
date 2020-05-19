function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.125 15.156C3.695 18.126 0 23.875 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.625-3.695-12.374-9.125-15.344l-.719 1.344c4.959 2.717 8.344 7.948 8.344 14 0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.052 3.385-11.283 8.344-14l-.719-1.344zM23.5 10a3 3 0 10-6 0 3 3 0 006 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 9.25v1.5h-7v-1.5h7zM23.5 3a3 3 0 10-6 0 3 3 0 006 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 2.25v1.5h-7v-1.5h7zM23.5 17a3 3 0 10-6 0 3 3 0 006 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 16.25v1.5h-7v-1.5h7z"
}));

export default SvgComponent;