import React, { useState, useEffect } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [tabContent, setTabContent] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const tabs = [
        { id: 1, tabTitle: 'Tab 1' },
        { id: 2, tabTitle: 'Tab 2' },
        { id: 3, tabTitle: 'Tab 3' },
        { id: 4, tabTitle: 'Tab 4' },
    ];

    useEffect(() => {
        const fetchContent = async (tabId) => {
            if (!tabContent[tabId]) {
                setLoading(true);
                setError(null);
                try {
                    // Use your local CORS proxy
                    const proxyUrl = 'http://localhost:8080/';
                    const apiUrl = 'https://loripsum.net/api/3/short/plaintext';
                    const response = await fetch(`${proxyUrl}${apiUrl}`);

                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }

                    const data = await response.text();
                    setTabContent(prev => ({ ...prev, [tabId]: data }));
                } catch (err) {
                    console.error(err);
                    setError('Failed to fetch content.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchContent(activeTab);
    }, [activeTab]); // Removed tabContent from dependencies

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={activeTab === tab.id ? 'active-tab' : ''}
                    >
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className='content'>
                <h2>{`Title ${activeTab}`}</h2>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && <p>{tabContent[activeTab]}</p>}
            </div>
        </div>
    );
}

export default Tabs;
