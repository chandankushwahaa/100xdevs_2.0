type EventType = 'click' | 'mouseover' | 'mouseout' | 'scroll';
type ExcludeEvent = Exclude<EventType, 'click' | 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Event: ${event}`);
};

handleEvent('mouseover');
// handleEvent('scroll'); // Error: Argument of type 'scroll' is not assignable to parameter of type 'ExcludeEvent'.