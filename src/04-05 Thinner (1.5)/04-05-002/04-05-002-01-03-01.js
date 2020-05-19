function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.844 19c-.27-.4-.483-.852-.688-1.313-.544-1.188-1.27-2.843-2.125-3.812-.648-.734-2.375-1.719-2.375-1.719C.681 11.661 0 10.67 0 9.5s.681-2.161 1.656-2.656c0 0 1.727-.985 2.375-1.719.851-.964 1.615-2.63 2.157-3.813C6.397.86 6.61.41 6.843 0 10.458 1.66 13 5.263 13 9.5s-2.542 7.84-6.156 9.5zm.562-2C9.86 15.398 11.5 12.649 11.5 9.5c0-3.141-1.622-5.894-4.063-7.5-.693 1.348-1.62 3.157-2.28 3.781-.881.832-3.063 1.938-3.063 1.938A1.993 1.993 0 001 9.5c0 .78.444 1.451 1.094 1.781 0 0 2.182 1.106 3.062 1.938.658.622 1.556 2.434 2.25 3.781z"
}));

export default SvgComponent;