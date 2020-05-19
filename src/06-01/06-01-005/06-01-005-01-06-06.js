function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 54
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C27.165 0 35 7.835 35 17.5S27.165 35 17.5 35 0 27.165 0 17.5 7.835 0 17.5 0zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.75 34v7s.023 3.837-.5 5.656C10.49 49.298 7.5 54 7.5 54h1.75s2.702-4.46 3.406-6.938c.556-1.953.594-6.062.594-6.062v-7h-1.5zm10 0v7s.038 4.11.594 6.063C23.048 49.538 25.75 54 25.75 54h1.75s-2.99-4.702-3.75-7.344c-.523-1.819-.5-5.656-.5-5.656v-7h-1.5zM2 49a3 3 0 003 3v-1a2 2 0 01-2-2v-1a2 2 0 012-2v-1a3 3 0 00-3 3v1zM5 43v11h1V43H5z"
}));

export default SvgComponent;