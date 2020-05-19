function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 3H.1l1.415 1.414h7.07v7.071L10 12.9V3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.556.172L10.707 15.02a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 5.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0l14.85-14.85L25.556.173z"
}));

export default SvgComponent;