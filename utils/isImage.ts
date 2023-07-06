export const isImage = (ext: string) => {
    if(ext == "JPEG" || ext == "PNG" || ext == "SVG" || ext == "JPG" ) {
        return true
    }
    return false
}