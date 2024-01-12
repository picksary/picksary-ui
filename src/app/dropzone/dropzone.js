import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"


export const DragAndDropZone = ()=>{
    const [folder, setFolder] = useState([])
    const onDrop = useCallback((files)=>{
        const file = files[0]
        console.log(file);
        if (file && file.webkitRelativePath) {
            const folderName = file.webkitRelativePath.split('/')[0];
            setFolder(folderName)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, 
        multiple: false, 
        directory: true
    })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop folder here</p>
        </div>
    )
}