class BTreeNode {
    value: number;
    left: BTreeNode | null = null;
    right: BTreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class BinaryTree {
    root: BTreeNode | null = null;

    // DFS traversal
    dfs(node: BTreeNode | null = this.root): void {
        if (node === null) return;
        console.log(node.value); // Process the current node
        this.dfs(node.left); // Traverse left subtree
        this.dfs(node.right); // Traverse right subtree
    }

    bfs(): void {
        if (this.root === null) return;

        const queue: BTreeNode[] = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift(); // Get and remove the first node in the queue
            if (currentNode !== undefined) {
                console.log(currentNode.value); // Process the current node

                if (currentNode.left !== null) {
                    queue.push(currentNode.left); // Add left child to the queue if it exists
                }

                if (currentNode.right !== null) {
                    queue.push(currentNode.right); // Add right child to the queue if it exists
                }
            }
        }
    }
}

const execute = () => {
    const root = new BTreeNode(1);
    const node2 = new BTreeNode(2);
    const node3 = new BTreeNode(3);
    const node4 = new BTreeNode(4);
    const node5 = new BTreeNode(5);

// Build the tree
    root.left = node2;
    root.right = node3;
    node2.left = node4;
    node2.right = node5;

// Create the binary tree
    const tree = new BinaryTree();
    tree.root = root;

// Perform traversals
    console.log('DFS Traversal:');
    tree.dfs();
    console.log('BFS Traversal:');
    tree.bfs();
}

execute()

