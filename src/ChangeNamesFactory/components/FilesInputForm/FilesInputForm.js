import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import "./FilesInputForm.css"
import JSZip from "jszip"
import {bigData} from "../../../BigData/BigData"

export default function FilesInputForm(props) {
    let makeURLForSaveNewFileHandler = props.makeURLForSaveNewFileHandler;
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log(acceptedFiles[i].name);
        }
        console.log("Всего принято файлов: " + acceptedFiles.length)


        let zip = new JSZip();

        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log("Проходы по файлам: " + i);
            for (let j = 0; j < bigData.length; j++) {
                console.log("Проходы по базе: " + j);
                const bigDataElement = bigData[j];
                if (bigDataElement.split(";")[0].toUpperCase() === acceptedFiles[i].name.toUpperCase().split(".JPG")[0]) {
                    addToZIP(zip, acceptedFiles[i], bigDataElement.split(";")[1] + ".JPG");
                    break;
                }
            }
        }

        zip.generateAsync({type: "blob"})
            .then(function (blob) {
                makeURLForSaveNewFileHandler(blob)
            });


    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const addToZIP = (zip, nextFile, newNameOfFile) => {
        zip.file(newNameOfFile, nextFile, {base64: true})
    };


    return (
        <div {...getRootProps()} >
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}