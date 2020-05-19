function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.314L11.314 0H0zm1.016 1.016l7.89-.022L.993 8.905l.022-7.889z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 6.364l14.142 14.142a4 4 0 005.657 0l2.828-2.828a8 8 0 000-11.314l-7.07 7.071 2.12 2.121c1.172 1.172 1.489 2.755.708 3.536a2 2 0 01-2.829 0l-5.347-5.348c.66-.176 1.293-.498 1.812-1.016a4 4 0 10-5.657-5.657c-.519.518-.84 1.152-1.017 1.812L6.364 4.95 4.95 6.364zm7.778 2.121a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 1.016l-.022 7.89L8.905.993l-7.889.022z",
  fill: "#fff"
}));

export default SvgComponent;