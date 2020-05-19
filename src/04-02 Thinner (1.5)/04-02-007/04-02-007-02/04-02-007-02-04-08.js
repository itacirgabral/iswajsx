function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v5H5V1H1V0h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 3.172L2.12 6l-.707-.707 2.829-2.829.707.708zM3.536 1.757L.707 4.586 0 3.879 2.828 1.05l.708.707z"
}));

export default SvgComponent;