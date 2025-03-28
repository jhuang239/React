import NewTask from "./NewTask";

export default function Task({ onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask onAdd={onAdd} />
            <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
            <ul></ul>
        </section>
    );
}
