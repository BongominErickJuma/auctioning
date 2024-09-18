import { useState } from 'react';

const usePost = (url, isFormData = false) => {
    const [dataRes, setDataRes] = useState(null);
    const [err, setErr] = useState(null);
    const [isPostPending, setIsPostPending] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("access_token"));

    const postData = async (requestData) => {
        setIsPostPending(true); // Start loading state
        setErr(null); // Reset error state
        
        try {
            const options = {
                method: 'POST',
                headers: isFormData
                    ? { Accept: 'application/json', Authorization: `Bearer ${token}`,
                } // No 'Content-Type' for FormData
                    : { 'Content-Type': 'application/json', Accept: 'application/json' ,  Authorization: `Bearer ${token}`,
                },
                body: isFormData ? requestData : JSON.stringify(requestData),
            };

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
            setDataRes(result); // Set the response dataRes
        } catch (err) {
            setErr(err.message); // Set err state
        } finally {
            setIsPostPending(false); // Stop loading state
        }
    };

    return { dataRes, isPostPending, err, postData };
};

export default usePost;
