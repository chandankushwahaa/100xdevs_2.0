
// type Direction = 'up' | 'down' | 'left' | 'right';
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function doSomething(keyPressed: Direction){
  if (keyPressed === Direction.Up){
    console.log('Moving Up');
  } else if (keyPressed === Direction.Down){
    console.log('Moving Down');
  } else if (keyPressed === Direction.Left){
    console.log('Moving Left');
  } else if (keyPressed === Direction.Right){
    console.log('Moving Right');
  } else {
    console.log('Invalid key pressed');
  }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
