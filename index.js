console.log('Hello from js');
setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
    console.log('Second task done!');
    setTimeout(function() {
      console.log('Third task done!');
      setTimeout(function() {
        console.log('Fourth task done!');
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

