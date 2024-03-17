var handleEvent = function (event) {
    console.log("Event: ".concat(event));
};
handleEvent('mouseover');
// handleEvent('scroll'); // Error: Argument of type 'scroll' is not assignable to parameter of type 'ExcludeEvent'.
