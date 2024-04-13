import { useState } from "react"

const loadingSpinner = () => {
 
    const [loading, setLoading] = useState(false)
  
    const showLoading = () => setLoading(true)

    const hideLoading = () => setLoading(false)

    const loadingPage = <div className="container text-center mt-5">
                            <div className="mt-5">
                                <div className="spinner-border mt-5" role="status">    
                                </div>
                            </div>
                        </div>

    return { loading, showLoading, hideLoading, loadingPage }

}

export default loadingSpinner