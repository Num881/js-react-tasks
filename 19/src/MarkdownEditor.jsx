import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const { onContentChange } = this.props;

        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            onContentChange(content);
        });
    }

    componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
        }
    }

    render() {
        return <div ref={this.editorRef} />;
    }
}

export default MarkdownEditor;
// END
