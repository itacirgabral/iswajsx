function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 11V3.222L15.778 11H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.636 23.728c-1.953-1.953.263-7.335 4.95-12.02l.353-.354.796.795c-4.021 4.496-6.379 8.47-5.392 9.458 1.172 1.171 6.554-2.311 12.021-7.779 5.467-5.467 8.95-10.849 7.778-12.02-.959-.96-4.744 1.247-9.082 5.06l-.817-.818.707-.707C17.246 1.047 22.153-1.01 23.91.747l1.414 1.414c2.148 2.148-.933 7.298-6.01 12.375l-4.95 4.95c-4.686 4.686-9.994 6.976-12.728 4.242z"
}));

export default SvgComponent;