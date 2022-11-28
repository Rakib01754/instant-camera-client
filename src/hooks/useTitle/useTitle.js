import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Capture Point`;

    }, [title])
}

export default useTitle;