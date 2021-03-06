function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31.95 3.1a4 4 0 010 5.657l-.707.707-.707-.707.707-.707a3 3 0 000-4.242l-.707-.707c-1.172-1.172-3.388-.855-4.95.707L21.763 7.63c.493.132.96.387 1.348.774a3 3 0 11-4.243 4.242 2.98 2.98 0 01-.773-1.347l-1.989 1.988c.494.132.961.387 1.348.774a3 3 0 01-4.243 4.242 2.98 2.98 0 01-.773-1.348l-.994.995c-2.322 2.321-3.536 9.192-3.536 9.192l-7.071-7.07s6.871-1.215 9.192-3.536L24.172 2.393a5 5 0 017.07 0l.708.708zm-9.9 6.364a1.5 1.5 0 10-2.121 2.122 1.5 1.5 0 002.121-2.122zm-5.657 5.657a1.5 1.5 0 10-2.12 2.122 1.5 1.5 0 002.12-2.122z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.778 13H27V5.222L34.778 13z"
}));

export default SvgComponent;