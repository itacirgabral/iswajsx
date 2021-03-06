function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.719 17l2.5-2.5-2.5-2.5-.719.719L9.781 14.5 8 16.281l.719.719zM6 15v-2H4v2h2zm9-2v-2h-2v2h2zM3 13v-2H1v2h2zm13-4V7h-2v2h2zM2 9V7H0v2h2zm13-4V3h-2v2h2zM3 5V3H1v2h2zm9-2V1h-2v2h2zM6 3V1H4v2h2zm3-1V0H7v2h2z"
}));

export default SvgComponent;