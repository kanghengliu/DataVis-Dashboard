// Helper function to fetch data from a URL(Public/data.json) and display it in a component.

import useSWR from 'swr';

function MyComponent() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('/data.json', fetcher);

    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>Data Loaded</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default MyComponent;
