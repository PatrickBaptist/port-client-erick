import { createContext,  useState } from "react"

export const ImageContext = createContext()

export const UserImage = ({ children }) => {
    const [openImage, setOpenImage] = useState(false)

    return  (
        <ImageContext.Provider value={[openImage, setOpenImage]}>
            {children}
        </ImageContext.Provider>
    )
}