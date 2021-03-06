function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.891 0l.719.719L4.828 2.5 6.61 4.281 5.89 5l-2.5-2.5 2.5-2.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.891 0l.719.719L7.829 2.5l1.78 1.781L8.892 5l-2.5-2.5 2.5-2.5zM10 2.219c1.067.12 2.094.283 3 .5v.844a27.455 27.455 0 00-3-.407V2.22zm-7 0v.937c-1.12.094-2.137.235-3 .406V2.72c.906-.217 1.933-.38 3-.5zm11 .75c2.432.733 4 1.824 4 3.031 0 1.036-1.144 1.977-3 2.688V5.874c.618-.265 1-.56 1-.875 0-.46-.765-.881-2-1.219V2.97zm0 3.25V9.03c-1.155.349-2.51.583-4 .75V6.844c1.596-.134 2.967-.343 4-.625z"
}));

export default SvgComponent;