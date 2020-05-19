function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v5h1V1h4V0H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.05 3.172L6.88 6l.707-.707-2.829-2.829-.707.708zM5.465 1.757l2.828 2.829L9 3.879 6.172 1.05l-.707.707zM6 11V6H5v4H1v1h5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 7.828L2.122 5l-.707.707 2.828 2.829.707-.708zM3.536 9.243L.707 6.414 0 7.121 2.83 9.95l.707-.707z"
}));

export default SvgComponent;