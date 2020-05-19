function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v1h-6.5A3.5 3.5 0 0014 4.5c0 1.765 1.301 3.26 3 3.5a6 6 0 010 12h-4a4.01 4.01 0 01-2.844-1.156L7 16c-.53-.623-1.237-1-2-1-1.657 0-3 1.79-3 4v4H0v-4a5 5 0 015-5c1.131.158 1.937.38 3.125 1.063l2.5 1.312c.555.291 2.057.625 2.375.625h5a3 3 0 000-6h-.5a5.5 5.5 0 010-11H24z"
}));

export default SvgComponent;