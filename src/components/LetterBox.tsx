import React, { useEffect, useState } from 'react';
import { fetchLetter } from '../api/letterAPI';
import { RETRIES } from '../config';

const LetterBox: React.FC<{ checkboxNumber: number }> = ({
    checkboxNumber,
}) => {
    const [letter, setLetter] = useState<string>('');
    const [retryCount, setRetryCount] = useState<number>(0);

    const fetchAndUpdateLetter = async () => {
        const latestLetter = await fetchLetter(checkboxNumber);
        if (latestLetter) {
            setLetter((prev) => prev.slice(-29) + latestLetter);
            setRetryCount(0); // Reset retry count on successful fetch
        } else {
            // Retry logic
            if (retryCount < RETRIES) {
                setRetryCount((prev) => prev + 1);
                setTimeout(fetchAndUpdateLetter, 0); // Retry immediately
            } else {
                setRetryCount(0); // Reset retry count after retries runs out
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchAndUpdateLetter, 2000);
        return () => clearInterval(interval);
    }, [checkboxNumber]);

    return (
        <div style={{ position: 'relative', display: 'flex', gap: '2px'}}>
            <div>{checkboxNumber}.</div>
            <div style={{ width: '240px', maxHeight: '240px' }}>{letter}</div>
        </div>
    );
};

export default LetterBox;

