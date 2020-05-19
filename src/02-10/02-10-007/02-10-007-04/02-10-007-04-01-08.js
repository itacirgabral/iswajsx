function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.891 0l.719.719L9.829 2.5l1.78 1.781-.718.719-2.5-2.5 2.5-2.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.891 0l.719.719L12.829 2.5l1.78 1.781-.718.719-2.5-2.5 2.5-2.5zM15 2.219c1.067.12 2.094.283 3 .5v.844a27.455 27.455 0 00-3-.407V2.22zm-7 0v.937c-1.12.094-2.137.235-3 .406V2.72c.906-.217 1.933-.38 3-.5zm11 .75c2.432.733 4 1.824 4 3.031 0 1.036-1.144 1.977-3 2.688V5.874c.618-.265 1-.56 1-.875 0-.46-.765-.881-2-1.219V2.97zm-15 0v.812C2.765 4.12 2 4.541 2 5c0 .315.382.61 1 .875v2.813C1.144 7.978 0 7.035 0 6c0-1.207 1.568-2.298 4-3.031zm15 3.25V9.03c-1.155.349-2.51.583-4 .75V6.844c1.596-.134 2.967-.343 4-.625zm-15 0c1.033.282 2.404.49 4 .625V9.78c-1.49-.167-2.845-.401-4-.75V6.22zm10 .718v2.938c-.809.063-1.637.125-2.5.125S9.809 9.938 9 9.875V6.937c.804.047 1.626.063 2.5.063.874 0 1.696-.016 2.5-.063z"
}));

export default SvgComponent;