function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 0C9.835 0 2 7.835 2 17.5S9.835 35 19.5 35 37 27.165 37 17.5 29.165 0 19.5 0zm0 2C28.06 2 35 8.94 35 17.5 35 26.06 28.06 33 19.5 33 10.94 33 4 26.06 4 17.5 4 8.94 10.94 2 19.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.093 32.313a15.554 15.554 0 001.907-.75C24.712 29.445 22.297 28 19.5 28c-2.798 0-5.212 1.446-6.5 3.563.613.284 1.253.546 1.906.75C15.885 30.934 17.563 30 19.5 30c1.937 0 3.615.935 4.593 2.313zM1 31.281L.28 32l3.531 3.531.719-.718L1 31.28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 38v-5.657H5.983l.022 4.663-4.662-.022V38H7zM33.968 31.281l-.687.688 3.531 3.562.719-.718-3.563-3.532z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M39.994 37.994v-5.656h-1.016L39 37l-4.663-.022v1.016h5.657z"
}));

export default SvgComponent;