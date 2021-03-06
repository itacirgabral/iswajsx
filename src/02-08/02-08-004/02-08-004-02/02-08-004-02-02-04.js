function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M41.012 4.03L29.698 15.342c-.585.586-1.693.428-2.474-.353-.53-.53-.788-1.203-.707-1.768l-.31-7.778c0-1.28-.482-2.56-1.458-3.536a5 5 0 00-7.071 0l-6.364 6.364c-2.322 2.321-9.193 3.536-9.193 3.536l7.071 7.07s1.215-6.87 3.536-9.192l6.364-6.364c.586-.585 1.694-.427 2.475.354.529.529.787 1.202.707 1.768l.31 7.778c0 1.28.481 2.559 1.458 3.535a5 5 0 007.07 0L42.427 5.444l-1.414-1.415zM0 9.686V21h11.314L0 9.686zm.994 2.409l7.911 7.91-7.889-.021-.022-7.89z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.994 12.095l.022 7.889 7.89.022-7.912-7.911z",
  fill: "#fff"
}));

export default SvgComponent;