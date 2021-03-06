function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v5H5V1H1V0h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 3.172L2.122 6l-.707-.707 2.828-2.829.707.708zM3.536 1.757L.707 4.586 0 3.879 2.83 1.05l.707.707zM3 11V6h1v4h4v1H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.05 7.828L6.88 5l.707.707-2.829 2.829-.707-.708zM5.465 9.243l2.828-2.829.707.707L6.172 9.95l-.707-.707z"
}));

export default SvgComponent;