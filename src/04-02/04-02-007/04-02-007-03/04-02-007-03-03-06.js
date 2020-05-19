function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 6V1h-1v4H6v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.95 2.828L7.122 0l-.708.707 2.83 2.829.706-.708zM8.536 4.243L5.707 1.414 5 2.121 7.83 4.95l.707-.707zM0 3v5h1V4h4V3H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.05 6.172L3.88 9l.707-.707-2.829-2.829-.707.708zM2.465 4.757l2.828 2.829L6 6.879 3.172 4.05l-.707.707z"
}));

export default SvgComponent;