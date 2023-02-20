function processData(input) {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const strings = lines.slice(1);

  // Sort the strings individually
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split('').sort().join('');
  }

  // Count the occurrences of each unique string
  const counts = new Map();
  for (const string of strings) {
    counts.set(string, (counts.get(string) || 0) + 1);
  }

  // Find the kth unique string
  const k = Number(lines[n+1]);
  let count = 0;
  for (const [string, occurrences] of counts) {
    if (occurrences === 1) {
      count++;
      if (count === k) {
        console.log(string);
        return;
      }
    }
  }
  console.log('');
}

// Run the function using standard input
process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = '';
process.stdin.on('data', function (data) {
  input += data;
});
process.stdin.on('end', function () {
  processData(input);
});
