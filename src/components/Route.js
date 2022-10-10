import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        console.log(currentPath);
        const onURLChange = (event) => {
            event.preventDefault();
            setCurrentPath(window.location.pathname);
        };

        // Listen for URL Changes
        window.addEventListener('popstate', onURLChange);

        // Cleanup the Event Listener
        return () => {
            window.removeEventListener('popstate', onURLChange);
        };
    }, []);
    return currentPath === path ? children : null;
};

export default Route;
