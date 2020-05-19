function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 8h7.778L14 15.778V8zm1.016 1.016v4.331l4.331-4.33h-4.33z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.272 1.636c1.953-1.953 7.335.263 12.02 4.95l.354.353-.795.796c-4.496-4.021-8.47-6.379-9.458-5.392-1.171 1.172 2.311 6.554 7.779 12.021 5.467 5.467 10.849 8.95 12.02 7.778.96-.959-1.247-4.744-5.06-9.082l.818-.817.707.707c4.296 4.296 6.353 9.203 4.596 10.96l-1.414 1.414c-2.148 2.148-7.298-.933-12.375-6.01l-4.95-4.95C.829 9.678-1.461 4.37 1.273 1.636z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.016 9.016h4.331l-4.33 4.331v-4.33z",
  fill: "#fff"
}));

export default SvgComponent;