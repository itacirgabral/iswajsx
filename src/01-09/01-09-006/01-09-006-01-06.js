function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8zM0 15h13v2H0zM15 0h2v13h-2zM24.188 3l-4.875 10h2.218L26 3.875 24.187 3zM28 10l-3 3v2.813l4.438-4.407L28 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.406 11.156l-2.125 2.125L13 24v-4.25l-8.594-8.594z"
}));

export default SvgComponent;