function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0H.1l1.415 1.414h7.07v7.071L10 9.9V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.678 2.121L19.899 9.9a1 1 0 01-1.414 0 1.015 1.015 0 01-.31-.707v-4.64l-1.988 1.989-5.48 5.48a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 2.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0l4.088-4.088a2.98 2.98 0 00.862 1.967 3 3 0 004.243 0l7.778-7.778-1.414-1.415z"
}));

export default SvgComponent;