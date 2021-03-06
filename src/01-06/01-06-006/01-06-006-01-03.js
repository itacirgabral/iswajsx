function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 15h15v15H4zM2.906 5c-.407.037-.856.188-1.344.469 0 0-2.593 1.495-1.093 4.093l1.5 2.594 1.718-1-1.5-2.594s-.49-.874.376-1.374c0 0 .874-.492 1.374.375L8.22 15h2.312L5.656 6.562S4.671 4.84 2.906 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0C7 0 7 3 7 3v3h2V3c0-.75.563-.953.844-1H10c1 0 1 1 1 1v12h2V3c0-3-3-3-3-3zM18.781 5c-1.14.104-1.968.938-1.968.938l-2.125 2.125 1.406 1.406c.726-.69 1.425-1.41 2.125-2.125.707-.707 1.437 0 1.437 0 .707.707 0 1.437 0 1.437L13.406 15h2.813c1.615-1.604 3.203-3.235 4.843-4.813 2.122-2.12 0-4.25 0-4.25-.795-.795-1.597-1-2.28-.937z"
}));

export default SvgComponent;