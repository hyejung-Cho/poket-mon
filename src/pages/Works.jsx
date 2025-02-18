import { todoList } from "../static/todo";

export function Works() {
    return <div>Works
        {
            todoList.map((list) => {
                <div key={list.id}> id:{list.id} todo:{list.todo} </div>
            })
        }
    </div>
}