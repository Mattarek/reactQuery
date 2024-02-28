import { useQuery } from 'react-query';
import './App.css';

interface ApiData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
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
            {data &&
                data.map((todo) => {
                    return <div key={todo.id}>{todo.title}</div>;
                })}
        </>
    );
}

export default App;
