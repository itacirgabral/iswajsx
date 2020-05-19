function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28.485 14H20V5.515l1.414 1.414v5.657h5.657L28.485 14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.95 1.98a6 6 0 010 8.484L23.536 9.05a4 4 0 10-5.657-5.657l-.707.708a4.01 4.01 0 00-1.194 2.828L16.111 14a5.992 5.992 0 01-1.768 4.243l-.707.707a6 6 0 01-8.485 0l-2.122-2.122a8 8 0 010-11.313l5.657 5.657c-1.952 1.952-2.585 4.485-1.414 5.656 1.562 1.563 3.778 1.88 4.95.708l.707-.708A4.01 4.01 0 0014.122 14l-.132-7.071c0-1.536.596-3.071 1.767-4.243l.707-.707a6 6 0 018.486 0z"
}));

export default SvgComponent;