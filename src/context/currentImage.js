import { createContext,  useState } from "react"

export const CurrentContext = createContext()

export const UserCurrent = ({ children }) => {
    const [currentImage, setcurrentImage] = useState(null)

    return  (
        <CurrentContext.Provider value={[currentImage, setcurrentImage]}>
            {children}
        </CurrentContext.Provider>
    )
}