function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v5h-1V1H7V0h5zM5.75 3.875A4.006 4.006 0 008.594 2.72L7.875 2a3.009 3.009 0 01-4.25 0L2.219.594l-.719.687L2.906 2.72A4.006 4.006 0 005.75 3.875z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.75 5.875A5.99 5.99 0 0010 4.125l-.719-.719a4.99 4.99 0 01-7.062 0L.813 2l-.72.719L1.5 4.125a5.99 5.99 0 004.25 1.75z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.215 3.426a5 5 0 007.071 0L8.58 2.72a4 4 0 01-5.657 0L1.508 1.305l-.707.707 1.414 1.414z",
  fill: "#fff"
}));

export default SvgComponent;