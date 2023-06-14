import { useForm } from "../../Hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = () => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form 
            onSubmit={onFormSubmit}
            className="form--todo">
                <input className="form--input"
                type="text" 
                name="description"
                placeholder="What to do?"
                value={description}
                onChange={onInputChange}/>
                <button type="submit"
                    className="btn warning-box">Add</button>
            </form>
        </>
    )
}