import { useQuery } from 'react-query';
import './App.css';

interface ApiData {
    id: number;
    title: string;
}

function App() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['todo'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
                res.json(),
            ),
    });

    if (error) return <div>There was an error!</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            {data?.map(({ id, title }: ApiData) => {
                return <div key={id}>{title}</div>;
            })}
        </>
    );
}

export default App;
