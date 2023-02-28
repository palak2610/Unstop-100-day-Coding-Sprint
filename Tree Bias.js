function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const adjList = new Array(n + 1).fill().map(() => []);
    for (let i = 1; i < n; i++) {
        const [a, b] = lines[i].split(' ').map(x => parseInt(x));
        adjList[a].push(b);
        adjList[b].push(a);
    }

    const depths = new Array(n + 1).fill(-1);
    const queue = [1];
    depths[1] = 0;
    let bias = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        bias += depths[node];
        for (const neighbor of adjList[node]) {
            if (depths[neighbor] === -1) {
                depths[neighbor] = depths[node] + 1;
                queue.push(neighbor);
            }
        }
    }

    console.log(bias);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
