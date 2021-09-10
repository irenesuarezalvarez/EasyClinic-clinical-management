/* NOT USED */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from "react-html-parser";

function Editor({parentCallback}){
    const [value, setValue] = useState("")
    const handleOnChange = (e, editor) =>{
        const data= editor.getData()
        setValue(data);
        parentCallback(ReactHtmlParser(value))
    }
    return(
        <div>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange}  
            />
        </div>
    )
}

export default Editor;