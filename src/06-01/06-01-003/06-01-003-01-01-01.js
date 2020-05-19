function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 4.219c-3.965.712-7 4.11-7 8.281a8.501 8.501 0 005 7.75V23H7a7 7 0 00-7 7v13h2V30a5 5 0 015-5h5V4.219zm4 0V25h5a5 5 0 015 5v13h2V30a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75c0-4.17-3.035-7.569-7-8.281zM6 30v13h2V30H6zm14 0v13h2V30h-2zM13 43V0h2v43h-2z"
}));

export default SvgComponent;