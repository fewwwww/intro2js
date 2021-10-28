const conditions = (randomParameter) => {
  if (randomParameter === 'random') {
    console.log('randomParameter is random');
  } else if (randomParameter === 'parameter') {
    console.log('randomParameter is parameter');
  } else if (randomParameter === 'randomParameter') {
    console.log('randomParameter is randomParameter');
  } else {
    console.log('really random');
  }
};

conditions('2193');
conditions('random');
conditions('parameter');
conditions('randomParameter');
