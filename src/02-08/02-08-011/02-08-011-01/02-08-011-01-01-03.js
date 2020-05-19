function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.515 14H9V5.515L.515 14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.05 1.98a6 6 0 000 8.484L5.464 9.05a4 4 0 115.657-5.657l.707.708a4.01 4.01 0 011.194 2.828L12.889 14c0 1.536.596 3.071 1.768 4.243l.707.707a6 6 0 008.485 0l2.122-2.122a8 8 0 000-11.313l-5.657 5.657c1.952 1.952 2.585 4.485 1.414 5.656-1.562 1.563-3.778 1.88-4.95.708l-.707-.708A4.01 4.01 0 0114.878 14l.132-7.071a5.992 5.992 0 00-1.767-4.243l-.707-.707a6 6 0 00-8.486 0z"
}));

export default SvgComponent;