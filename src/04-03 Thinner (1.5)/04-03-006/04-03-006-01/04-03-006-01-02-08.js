function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.565 5.849l-1.414 1.414L8.737 5.85l1.414-1.414 1.414 1.414zM8.737 8.677l-1.414 1.415-1.415-1.415 1.415-1.414 1.414 1.414zm-2.829 2.829L4.494 12.92 3.08 11.506l1.414-1.414 1.414 1.414zM6.732 1.542l-.984 1.705-1.732-1L5 .542l1.732 1zM4.748 4.979l-1 1.732-1.732-1 1-1.732 1.732 1zm-2 3.464l-1.016 1.76-1.732-1 1.016-1.76 1.732 1zM15.458 11l-1.705.984-1-1.732 1.705-.984 1 1.732zm-3.437 1.984l-1.732 1-1-1.732 1.732-1 1 1.732zm-3.464 2L6.797 16l-1-1.732 1.76-1.016 1 1.732z"
}));

export default SvgComponent;