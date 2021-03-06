function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.844 14.781C4.019 17.622 0 23.583 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.917-4.019-12.878-9.844-15.719l-.625 1.375C29.833 18.762 33.5 24.193 33.5 30.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.307 3.667-11.738 8.969-14.344l-.625-1.375zM11.5 9a3 3 0 116 0 3 3 0 01-6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 8.25v1.5h7v-1.5h-7zM23.5 3a3 3 0 10-6 0 3 3 0 006 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 2.25v1.5h-7v-1.5h7zM23.5 15a3 3 0 10-6 0 3 3 0 006 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 14.25v1.5h-7v-1.5h7z"
}));

export default SvgComponent;