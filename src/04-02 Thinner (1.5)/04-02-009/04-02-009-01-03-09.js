function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 6V1h-1v4H7v1h5zM5.75 2.125c1.024 0 2.063.375 2.844 1.156L7.875 4a3.009 3.009 0 00-4.25 0L2.219 5.406 1.5 4.719 2.906 3.28A4.006 4.006 0 015.75 2.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.75.125A5.99 5.99 0 0110 1.875l-.719.719a4.99 4.99 0 00-7.062 0L.813 4l-.72-.719L1.5 1.875A5.99 5.99 0 015.75.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.215 2.574a5 5 0 017.071 0l-.707.707a4 4 0 00-5.657 0L1.508 4.695l-.707-.707 1.414-1.414z",
  fill: "#fff"
}));

export default SvgComponent;