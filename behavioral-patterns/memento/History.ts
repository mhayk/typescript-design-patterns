import EditorState from './EditorState'

class History {
    private states: Array<EditorState> = [];

    public push(state: EditorState): void {
        this.states.push(state);
    }

    public pop(): EditorState {
        let lastIndex: number;
        lastIndex = this.states.length - 1;
        let lasState = this.states[lastIndex]
        this.states.pop()

        return lasState
    }
}

export default History;