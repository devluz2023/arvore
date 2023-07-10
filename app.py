from typing import List

class Node:
    def __init__(self, parent, children):
        self.parent = parent
        self.children = children

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

def buildTree(input):
    root = TreeNode("")
    map = {"": root}

    for path in input:
        segments = path.split("/")
        currentNode = root

        for segment in segments:
            if segment == "":
                continue
            
            childNode = map.get(segment)

            if not childNode:
                childNode = TreeNode(segment)
                map[segment] = childNode
                currentNode.children.append(childNode)

            currentNode = childNode

    return root

def breakParent(path):
    segments = [segment for segment in path.split("/") if segment != ""]
    if len(segments) == 0:
        return "/"
    parentName = segments[-1]
    return "/" if parentName == "" else parentName

def generateOutput(root, prefix=""):
    output = []

    if root.value != "":
        output.append(Node(breakParent(prefix), root.value))

    for child in root.children:
        childOutput = generateOutput(child, prefix + root.value + "/")
        output.extend(childOutput)

    return output

# dados do blobstorage
input_data = [
    "home/fabio/julio/file1.txt",
    "home/fabio/julio/file2.txt",
    "home/fabio/file3.txt",
    "home/fabio/file4.txt",
    "home/file5.txt",
    "faluz/file6.txt",
    "luz/file8.csv",
    "luz/file9.txt",
    "luz/file10.csv"
]


root = buildTree(input_data)

#resultado esperado
output = generateOutput(root)
for node in output:
    print(f"{{ parent: '{node.parent}', children: '{node.children}' }}")
