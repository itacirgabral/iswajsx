function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 7.281l-2.5-2.5-2.5 2.5.719.719L14.5 6.219 16.281 8 17 7.281zM13 1h-2v2h2V1zm0 12h-2v2h2v-2zM9 0H7v2h2V0zm0 14H7v2h2v-2zM5 1H3v2h2V1zm0 12H3v2h2v-2zM3 4H1v2h2V4zm0 6H1v2h2v-2zM2 7H0v2h2V7zM17 11.281l-2.5-2.5-2.5 2.5.719.719 1.781-1.781L16.281 12l.719-.719z"
}));

export default SvgComponent;