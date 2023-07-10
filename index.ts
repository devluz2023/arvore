interface Node {
  parent: string;
  children: string;
}

class TreeNode {
  value: string;
  children: TreeNode[];

  constructor(value: string) {
    this.value = value;
    this.children = [];
  }
}

function buildTree(input: string[]): TreeNode {
  const root = new TreeNode("");
  const map: { [key: string]: TreeNode } = { "": root };

  for (const path of input) {
    const segments = path.split("/");
    let currentNode = root;

    for (const segment of segments) {
      if (segment === "") continue;
      let childNode = map[segment];

      if (!childNode) {
        childNode = new TreeNode(segment);
        map[segment] = childNode;
        currentNode.children.push(childNode);
      }

      currentNode = childNode;
    }
  }

  return root;
}

function breakParent(path: string): string {
  const segments = path.split("/").filter(segment => segment !== "");
  if(segments.length === 0) return "root";
  const parentName = segments[segments.length - 1];
  return parentName === "" ? "/" : parentName;
}


function generateOutput(root: TreeNode, prefix: string = ""): Node[] {
  const output: Node[] = [];

  if (root.value !== "") {
    //@ts-ignore
    output.push({ parent: breakParent(prefix), children: root.value });
   // output.push({ parent: prefix, children: root.value });
  }

  for (const child of root.children) {
    const childOutput = generateOutput(child, prefix + root.value + "/");
    output.push(...childOutput);
  }

  return output;
}

// Input data
const input: string[] = [
  "home/fabio/julio/file1.txt",
  "home/fabio/julio/file2.txt",
  "home/fabio/file3.txt",
  "home/fabio/file4.txt",
  "home/file5.txt",
  "faluz/file6.txt",
  "luz/file8.csv",
  "luz/file9.txt",
  "luz/file10.csv"
];

// Build the tree
const root = buildTree(input);

// Generate the output
const output = generateOutput(root);
console.log(output);
