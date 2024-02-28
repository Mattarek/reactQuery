import { useQuery } from 'react-query';
import './App.css';

interface ApiData {
    id: number;
    title: string;
}

function App() {
    const { data } = useQuery({
        queryKey: ['todo'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
                res.json(),
            ),
    });

    return (
        <>
            {data?.map(({ id, title }: ApiData) => {
                return <div key={id}>{title}</div>;
            })}
        </>
    );
}

export default App;
