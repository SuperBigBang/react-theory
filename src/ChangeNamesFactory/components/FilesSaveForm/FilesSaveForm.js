import React from 'react';

export default function FilesSaveForm(props) {
    let fileContent = props.fileContent; //It's work
    // URL pointing to the Blob with the file contents
    let objUrl = null;
    // create the blob with file content, and attach the URL to the downloadlink;
    // NB: link must have the download attribute
    // this method can go to your library

    // revoke the old object URL to avoid memory leaks.
    if (objUrl !== null) {
        window.URL.revokeObjectURL(objUrl);
    }
    // create the object that contains the file data and that can be referred to with a URL
    let data = new Blob([fileContent], {type: 'application/zip;base64'});
    objUrl = window.URL.createObjectURL(data);
    // attach the object to the download link (styled as button)

    return (
        <a id="a_btn_writetofile" download="createdZipFile.zip" href={objUrl} className="btn btn-primary"
        >
            Скачать архив с переименованными файлами
        </a>
    )
}
