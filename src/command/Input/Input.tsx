import React, {ChangeEvent, useState} from 'react';

type InputType = {

}

export const Input = (props:InputType) => {

    let [title, setTitle] = useState<string>()
    console.log(title)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
    <div>
        <input value={title} onChange={onChangeHandler} />
    </div>
)
    ;
};
