function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.219 8l1.5 1.5H9.5v4.781l1.5 1.5V8H3.219z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.728 1.636c-1.953-1.953-7.335.263-12.02 4.95l-.354.353.795.796c4.496-4.021 8.47-6.379 9.458-5.392 1.171 1.172-2.311 6.554-7.779 12.021-5.467 5.467-10.849 8.95-12.02 7.778-.96-.959 1.247-4.744 5.06-9.082l-.818-.817-.707.707C1.047 17.246-1.01 22.153.747 23.91l1.414 1.414c2.148 2.148 7.298-.933 12.375-6.01l4.95-4.95c4.686-4.686 6.976-9.994 4.242-12.728z"
}));

export default SvgComponent;