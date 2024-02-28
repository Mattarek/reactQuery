import { useQuery, useMutation } from 'react-query';
import './App.css';

interface ApiData {
    id: number;
    title: string;
}

interface ExampleData {
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

    const {
        mutate,
        isLoading: isPending,
        isError,
    } = useMutation({
        mutationFn: (newPost: ExampleData) =>
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
            }).then((res) => res.json()),
    });

    if (error || isError) return <div>There was an error!</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            {isPending && <h1>Data is being added...</h1>}
            <button onClick={() => mutate({ id: 1, title: 'Do Laundry' })}>
                Add post
            </button>
            {data?.map(({ id, title }: ApiData) => {
                return <div key={id}>{title}</div>;
            })}
        </>
    );
}

export default App;
