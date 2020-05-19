function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.719 3.312L0 2.593 2.625 0l2.594 2.594-.719.719-1.875-1.875L.719 3.312z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 3.312l-.719-.719L6.406 0 9 2.593l-.719.719-1.875-1.875L4.5 3.312z"
}));

export default SvgComponent;