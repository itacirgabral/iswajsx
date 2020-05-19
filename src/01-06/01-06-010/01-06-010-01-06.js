function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15v15H7V15h8zM2.063 17.219L.625 18.625 6 24v-2.813L2.062 17.22zM7 0v13h2V0H7zM12.5 4.5a2 2 0 00-.5 3.938V13h1V8.437a2.001 2.001 0 00-.5-3.937zM16.5 10.5a2 2 0 110 4 2 2 0 010-4zM18.5 17.5a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;