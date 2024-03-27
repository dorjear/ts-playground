interface TextWithStyle{
    id: string;
    text: string;
    style?: string;
}

interface RangedStyleNode {
    id: string;
    text: string;
    styling?: {
        style: string;
        range: string
    } []
}

function convertToRangedStyle(nodes: TextWithStyle[]): RangedStyleNode[]{
    const rangedStyleNodes: RangedStyleNode[] = []
    let currentText

    let rangedNode: RangedStyleNode = {
        id : "a" ,
        text : "",
        styling: []
    }

    for (const node of nodes) {
        const { id, text, style } = node
        let currentIndex = rangedNode.text.length
        rangedNode.text += text;

        if (style != undefined) {
            rangedNode.styling?.push({style, range: `${currentIndex+1}-${currentIndex + text.length}`})
        }
    }

    rangedStyleNodes.push(rangedNode);

    return rangedStyleNodes
}

const input: TextWithStyle[] = [
    {"id": "1", "text": "I accept the "},
    {"id": "2", "text": "terms and ", "style": "underline"},
    {"id": "2", "text": "conditions", "style": "bold"},
    {"id": "3", "text": "."}
]

let output  = convertToRangedStyle(input);

console.log(JSON.stringify(output));
