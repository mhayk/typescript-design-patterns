import EditorState from './EditorState'

class Editor {
    private content: string = "";

    public createState(): EditorState {
        return new EditorState(this.content)
    }

    public restore(state: EditorState): void {
        this.content = state.getContent()
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }
}

export default Editor;