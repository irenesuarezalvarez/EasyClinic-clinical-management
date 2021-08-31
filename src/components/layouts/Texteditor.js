import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



function Texteditor(){
    /* const [value, setValue] = useState("")

    const handleChange = (e, editor) =>{
        const data = editor.getData()
        setValue(data)
    } */
    return (
        <div>
            <h2>Session</h2>
            <CKEditor
                editor={ ClassicEditor }
              
            />
        </div>
    );

}

export default Texteditor;
