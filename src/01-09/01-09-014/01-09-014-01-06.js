function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 15h8v15H8zM3 15c-3 0-3 3-3 3v2h2v-2c0-1 1-1 1-1h3v-2H3zM9 0h1v13H9zM12 2h1v11h-1zM15 4h1v9h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 19.156V20H0l6 6v-2.813l-4-4.03z"
}));

export default SvgComponent;