function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 13c-7 0-7 6-7 6 0 6 6 6 6 6h5.938C15.982 28.01 12 28 12 28c-5.519 0-8.484-2.54-10.094-5.281L0 23.812C3.872 29.997 12 30 12 30c9 0 9-9 9-9 0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v13s.868.042 2 .313V0h-2zM22 3l-5.5 10.781a7.974 7.974 0 011.719 1L23.78 3.906 22 3zM26 10l-6.313 6.313c.37.538.681 1.176.907 1.906l6.812-6.813L26 10z"
}));

export default SvgComponent;