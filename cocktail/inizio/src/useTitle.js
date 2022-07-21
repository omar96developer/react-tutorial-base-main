import { useEffect } from 'react'

function useTitle(title) {
    useEffect(() => {
        document.title = `Wiki Drink - ${title}`
    }, [title])
  
}

export default useTitle