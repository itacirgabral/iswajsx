function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.565 10.15l-1.414-1.413-1.414 1.414 1.414 1.414 1.414-1.414zM8.737 7.323L7.323 5.908 5.908 7.322l1.415 1.415 1.414-1.415zM5.908 4.494L4.494 3.08 3.08 4.494l1.414 1.414 1.414-1.414zM6.732 14.458l-.984-1.705-1.732 1L5 15.458l1.732-1zm-1.984-3.437l-1-1.732-1.732 1 1 1.732 1.732-1zm-2-3.464l-1.016-1.76-1.732 1 1.016 1.76 1.732-1zM15.458 5l-1.705-.985-1 1.733 1.705.984 1-1.732zm-3.437-1.985l-1.732-1-1 1.733 1.732 1 1-1.733zm-3.464-2L6.797 0l-1 1.732 1.76 1.016 1-1.733z"
}));

export default SvgComponent;