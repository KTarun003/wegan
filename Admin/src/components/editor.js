import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

export default class Editor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: props.content
		};

		this.handleChange = this.handleChange.bind( this );
		this.onEditorChange = this.onEditorChange.bind( this );
	}

	onEditorChange( evt ) {
		this.setState( {
			data: evt.editor.getData()
		} );
		this.props.changeContent(this.state.data);
	}

	handleChange( changeEvent ) {
		this.setState( {
			data: changeEvent.target.value
		} );
	}

	render() {
		return (
			<CKEditor data={this.state.data} onChange={this.onEditorChange} />
		);
	}
}