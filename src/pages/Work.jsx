import { useParams, useSearchParams } from "react-router-dom";
import { todoList } from "../static/todo";

export function Work() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.set("key2", "22");

    console.log(searchParams.getAll("key1"));
    console.log(searchParams.getAll("key2"));

    const todoItem = todoList.find(list => list.id === parseInt(params.id));

    return <div>
        {
            <div>id: {todoItem.id} todo: {todoItem.todo}</div>
        }
    </div>;
}