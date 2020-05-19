function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.686 2H12v11.314L.686 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.97.586L12.708 16.849a4 4 0 01-5.657 0c-1.171-1.171-.222-4.02 2.122-6.364L3.515 4.828a8 8 0 000 11.314l2.121 2.121a6 6 0 008.485 0L30.385 2 28.97.586z"
}));

export default SvgComponent;