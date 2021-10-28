const tokens = [
  'create',
  'an',
  'array',
  'of',
  'strings',
  'and',
  'use',
  'random()',
  'to',
  'select',
  'random',
  'entries',
  'and',
  'add',
  'them',
  'to',
  'a',
  'sentence',
  'printing',
  'the',
  'result',
  'to',
  'the',
  'console',
];

let outputSentence = '';

for (let i = 0; i < tokens.length; i++) {
  const selectedIndex = Math.floor(Math.random() * tokens.length);
  outputSentence += tokens[selectedIndex];
  outputSentence += ' ';
}

console.log(outputSentence);
