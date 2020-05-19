function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.719 3.312L0 2.593 2.625 0l2.594 2.594-.719.719-1.875-1.875L.719 3.312zM6.5 0L5.78.718l2.625 2.594L11 .718 10.28 0 8.406 1.875 6.5 0z"
}));

export default SvgComponent;