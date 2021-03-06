function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0L0 12v17l12 12h17l12-12V12L29 0H12zm.438 1h16.124L40 12.438v16.124L28.562 40H12.438L1 28.562V12.438L12.438 1zm.812 2L3 13.25v14.5L13.25 38h14.5L38 27.75v-14.5L27.75 3h-14.5zm.406 1h13.688l4.468 4.469L24 16.28v1.438l8.531-8.532L37 13.657V20H4v-6.344l4.469-4.469L17 17.72V16.28L9.187 8.47 13.657 4zM4 21h15.281L8.47 31.813 4 27.343V21zm17.719 0H37v6.344l-4.469 4.468L21.72 21zM20 21.719V37h-6.344l-4.469-4.469L20 21.72zm1 0L31.813 32.53 27.343 37H21V21.719z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 4h7v16h-7V4z"
}));

export default SvgComponent;