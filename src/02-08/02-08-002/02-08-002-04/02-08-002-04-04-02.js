function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 0a5 5 0 015 5v3h-2V5a3 3 0 00-3-3 4 4 0 00-4 4v12h-2v-3a3 3 0 00-6 0v13H8v-3a3 3 0 00-6 0v16H0V25a5 5 0 015-5c1.124 0 2.167.368 3 1v-6a5 5 0 015-5c1.124 0 2.167.368 3 1V6a6 6 0 016-6z"
}));

export default SvgComponent;