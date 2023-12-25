import { useState } from 'react';

type Props = {
    tags: string[]
    setTags: any
    placeholder: string
}

export const TagsInput = (props: Props) => {

    let tags = props.tags

    const [tagInput, setTagInput] = useState("");

    const handleInputChange = (e: any) => {
        setTagInput(e.target.value);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && tagInput.trim() !== "") {
            props.setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        props.setTags(newTags);
    };

    return (
        <div className="flex rounded-md bg-white flex-wrap gap-2 px-5 py-1 ring-gray-300 ring-1">
            {tags?.map((tag: string, index: number) => (
                <button
                    type='button'
                    key={index}
                    className="py-1 cursor-pointer"
                    onClick={() => handleRemoveTag(index)}
                >
                    <p className='bg-blue-500 rounded-full hover:bg-[red] text-white px-3 py-0.5 text-sm font-medium'>{tag}</p>
                </button>
            ))}
            <input
                type="text"
                value={tagInput}
                onChange={e => handleInputChange(e)}
                onKeyDown={e => handleKeyDown(e)}
                placeholder={props.placeholder}
                className="border-0 outline-none text-black rounded py-1 px-2"
            />
        </div>
    );
};