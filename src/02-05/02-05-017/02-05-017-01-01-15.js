function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M38 10v2H7v-2h31zM12 5L16.5.5 21 5h-9zM7 4v14l-7-7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S16 17.21 16 15V5h1zM24 5L28.5.5 33 5h-9zM29 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S28 17.21 28 15V5h1z"
}));

export default SvgComponent;