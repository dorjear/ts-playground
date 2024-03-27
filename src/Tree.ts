class TreeNode {
    private value: string;
    private children: TreeNode[] | null = null;

    constructor(value: string) {
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }

    public getChildren(): TreeNode[] | null {
        return this.children;
    }

    public setChildren(children: TreeNode[]): void {
        this.children = children;
    }

    public getStream(): TreeNode[] {
        let nodes: TreeNode[] = [this];
        if (this.children) {
            this.children.forEach(child => {
                nodes = nodes.concat(child.getStream());
            });
        }
        return nodes;
    }

    public static convertToNodeStream(node: TreeNode): TreeNode[] {
        return node.getStream();
    }
}

// Example usage
const main = (): void => {
    const node1 = new TreeNode("node1");
    const node2 = new TreeNode("node2");
    const node3 = new TreeNode("node3");
    const node4 = new TreeNode("node4");
    const node5 = new TreeNode("node5");
    const node6 = new TreeNode("node6");
    const node7 = new TreeNode("node7");
    const node8 = new TreeNode("node8"); // Corrected from "node9" to "node8" for clarity
    const node9 = new TreeNode("node9");
    const node10 = new TreeNode("node10");

    node1.setChildren([node2, node3, node4]);
    node2.setChildren([node5, node6, node7]);
    node3.setChildren([node8, node9]);
    node4.setChildren([node10]);

    node1.getStream().forEach(each => console.log(each.getValue()));
    TreeNode.convertToNodeStream(node1).forEach(each => console.log(each.getValue()));;
};

main();
