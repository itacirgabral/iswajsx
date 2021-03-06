function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 10C9.015 10 7 11.79 7 14h1c0-1.105 1.567-2 3.5-2s3.5.895 3.5 2h1c0-2.21-2.015-4-4.5-4zM5.719 18.313L5 17.593 7.625 15l2.594 2.594-.719.718-1.875-1.875-1.906 1.875zM11.5 15l-.719.719 2.625 2.594L16 15.719 15.28 15l-1.875 1.875L11.5 15zM23.5 10c-2.485 0-4.5 1.79-4.5 4h1c0-1.105 1.567-2 3.5-2s3.5.895 3.5 2h1c0-2.21-2.015-4-4.5-4zM29.281 18.313l.719-.72L27.375 15l-2.594 2.594.719.718 1.875-1.875 1.906 1.875zM23.5 15l.719.719-2.625 2.594L19 15.719l.719-.719 1.875 1.875L23.5 15z"
}));

export default SvgComponent;