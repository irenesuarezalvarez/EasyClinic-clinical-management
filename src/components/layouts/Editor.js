import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor(){
    return(
        <div>
            <h1>Article</h1>
            <CKEditor
                editor={ClassicEditor}
            />
        </div>
    )
}

export default Editor;