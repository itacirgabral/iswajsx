function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.25 33s.023 3.837-.5 5.656C9.99 41.298 7 46 7 46h1.75s2.702-4.46 3.406-6.938c.556-1.953.594-6.062.594-6.062h-1.5zM22.25 33s.038 4.11.594 6.063C23.548 41.538 26.25 46 26.25 46H28s-2.99-4.702-3.75-7.344c-.523-1.819-.5-5.656-.5-5.656h-1.5z"
}));

export default SvgComponent;