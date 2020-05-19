function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 37,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.314L11.314 0H0zm1.016 1.016l7.89-.022L.993 8.905l.022-7.889z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.95 6.364l8.131 8.132a3.5 3.5 0 004.95 0 3.48 3.48 0 001.017-2.475V9.148l6.408 6.408a4 4 0 005.657 0l2.828-2.828a8 8 0 000-11.314l-7.07 7.071 2.12 2.122c1.172 1.171 1.489 2.754.707 3.535a2 2 0 01-2.828 0L17.037 4.31l.022 7.712c0 .384-.15.768-.442 1.06a1.5 1.5 0 01-2.121 0L6.364 4.95 4.95 6.364z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.016 1.016l-.022 7.89L8.905.993l-7.889.022z",
  fill: "#fff"
}));

export default SvgComponent;