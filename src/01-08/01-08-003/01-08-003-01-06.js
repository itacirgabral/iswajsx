function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 11c-6.125 0-6.904 4.602-7 5.75V17c0 6 6 6 6 6H17.938c-1.632 2.497-4.664 2.931-5.625 3H12c-1.098 0-2.094-.099-3-.281L8.5 27.5c2.009.486 3.5.5 3.5.5 9 0 9-9 9-9 0-8-8-8-8-8zM1.906 20.719L0 21.812c1.718 2.745 4.282 4.276 6.594 5.125l.468-1.78c-2.5-.972-4.114-2.665-5.156-4.438zM6 0v11.688c.605-.614 1.29-1.072 2-1.438V0H6zM17 3v6.813c.655.25 1.345.572 2 1V3h-2zM26 9l-4.438 4.438c.36.574.67 1.204.907 1.937l4.937-4.969L26 9z"
}));

export default SvgComponent;