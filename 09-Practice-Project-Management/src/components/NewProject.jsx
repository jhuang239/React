import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modalRef = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
            modalRef.current.open();
            return;
        }

        onAdd({ title, description, dueDate });
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        dueDateRef.current.value = "";
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please make sure you provide the correct content.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input ref={descriptionRef} label="Description" isTextarea />
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                </div>
            </div>
        </>
    );
}
