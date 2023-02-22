class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderSum(node, start, end) {
  if (!node) {
    return 0;
  }

  let totalSum = 0;
  if (node.val >= start) {
    totalSum += inorderSum(node.left, start, end);
  }
  if (node.val >= start && node.val <= end) {
    totalSum += node.val;
  }
  if (node.val <= end) {
    totalSum += inorderSum(node.right, start, end);
  }

  return totalSum;
}

function processData(input) {
  const lines = input.split("\n");
  const n = Number(lines[0]);
  const nodes = lines[1].split(" ").map(Number);
  const start = Number(lines[2].split(" ")[0]);
  const end = Number(lines[2].split(" ")[1]);

  let root = new Node(nodes[0]);
  for (let i = 1; i < n; i++) {
    let cur = root;
    let node = nodes[i];
    while (cur) {
      if (node < cur.val) {
        if (!cur.left) {
          cur.left = new Node(node);
          break;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = new Node(node);
          break;
        }
        cur = cur.right;
      }
    }
  }

  const result = inorderSum(root, start, end);
  console.log(result);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
