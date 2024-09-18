import { useState, useEffect } from 'react';

  const useFetch = (url,query) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("access_token"));

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {
            signal: abortCont.signal,
            method: 'POST', // POST method to fetch data
            headers: {
                'Content-Type': 'application/json',
                Accept:'application/json',
                Authorization: `Bearer ${token}`,

            },
            body:  JSON.stringify(query),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parse JSON response
            })
            .then((data) => {
                setData(data); // Set the fetched data
                setIsPending(false); // Loading complete
                console.log(data)
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message); // Set the error message
                    setIsPending(false); // Loading complete
                }
            });

        return () => abortCont.abort(); // Cleanup function to abort fetch
    }, [url]);

    return { data, isPending, error }; // Return data, isPending, and error state
};

export default useFetch;





    // const handleDelete = async (id) => {
    //     if (!window.confirm("Are you sure you want to delete this item?")) return;

    //     setLoading(true);
    //     try {
    //         const response = await fetch(`http://127.0.0.1:8000/api/v1/admin/delete/category/${id}`, {
    //             method: 'POST',
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to delete item');
    //         }

    //         // Refresh the list after deletion
    //         window.location.reload();

    //         setItems(items.filter(item => item.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting item:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };  