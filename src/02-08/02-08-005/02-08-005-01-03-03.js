function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.05 3.1a4 4 0 000 5.657l.707.707.707-.707-.707-.707a3 3 0 010-4.242l.707-.707c1.172-1.172 3.388-.855 4.95.707l6.364 6.364c2.322 2.321 3.536 9.192 3.536 9.192l7.07-7.071s-6.87-1.214-9.192-3.536l-6.364-6.364a5 5 0 00-7.07 0l-.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.222 13H8V5.222L6.586 6.636v4.95h-4.95L.222 13zM5.879 18.657l.707.707L24.97.979l-.708-.707L5.88 18.657z"
}));

export default SvgComponent;