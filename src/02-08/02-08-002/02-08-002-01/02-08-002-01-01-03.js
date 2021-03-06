function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.343 3.1a4 4 0 000 5.657l.707.707L5.464 8.05l-.707-.707a2 2 0 010-2.828l.707-.707a3 3 0 014.243 0l7.071 7.07-1.26-4.618a1.982 1.982 0 01.553-1.745 3 3 0 014.243 0l1.414 1.414c2.321 2.321 3.535 9.192 3.535 9.192l7.072-7.07s-6.871-1.215-9.193-3.536L21.728 3.1a5 5 0 00-7.071 0 3.99 3.99 0 00-1.017 1.811l-2.519-2.519a5 5 0 00-7.07 0l-.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.515 13H9V4.515L.515 13z"
}));

export default SvgComponent;