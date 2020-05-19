function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 20l-7 7-7-7h2l5 5 5-5h2zM22 0a6 6 0 00-6 6v5h-4a6 6 0 00-6 6v3h2v-3c0-2.21 2.133-3.733 4-4l4-.563V14a3 3 0 103-3h-1.625L18 6c.234-1.871 1.79-4 4-4h5V0h-5zm-3 12a2 2 0 11-2 2l.219-1.75L19 12z"
}));

export default SvgComponent;