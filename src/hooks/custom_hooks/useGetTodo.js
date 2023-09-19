import axios from "axios"
import { useState } from "react"

export const useGetTodo =  (initialValue) => {

    const [todoList, setTodoList] = useState();

    const getTodos = async () => {
        const result = await axios.get(`https://dummyjson.com/todos?limit=${initialValue}`).then((data)=> {
            return {
                message: "success",
                data : data.data.todos
            }
        }).catch((err)=> {
            return {
                message : "failure",
                err
            }
        })

        setTodoList(result);
    }

    return [todoList, getTodos];
}