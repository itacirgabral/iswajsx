function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 0122 8.5a8.501 8.501 0 01-5 7.75V19h3a7 7 0 017 7v22h-2V26a5 5 0 00-5-5H7a5 5 0 00-5 5v22H0V26a7 7 0 017-7h3v-2.75A8.501 8.501 0 015 8.5 8.5 8.5 0 0113.5 0zM21 24v3.219A5.394 5.394 0 0019.5 27c-.525 0-1.02.082-1.5.219V24h3zM9 24v17H6V24h3zm12 13.781V41h-3v-3.219c.48.137.975.219 1.5.219.524 0 1.02-.08 1.5-.219zM23 44v4H4v-4h19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 28a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;