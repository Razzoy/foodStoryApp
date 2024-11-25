import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function UploadRecipe() {

    const [inputCount, setInputCount] = useState(0);
    const inputs = [];
    const [inp, setInp] = useState([])

    function AddInstruction() {
        setInputCount((prev) => prev + 1)
        for (let i = 0; i <= inputCount; i++) {
            inputs.push(i);
            setInp([...inputs]);
        }
    }






    return (
        <>
            <div>
                <input type="text" placeholder='title' />
                <input type="text" placeholder='time' />
                <input type="text" placeholder='difficulty' />
                <input type="text" placeholder='image' />
                <input type="text" placeholder='title' />
                <div>
                    <h2>Ingredients</h2>
                    <input type="text" placeholder='item' />
                    <input type="text" placeholder='amount' />
                    <input type="text" placeholder='unit' />
                </div>
                <div>
                    <div>
                        <h2>Instructions</h2>
                        {
                            inp.map((item) => {
                                function deleteInput() {
                                }


                                return (
                                    <>
                                        <p>#{item + 1}</p>
                                        <input key={item} type="text" placeholder='instruction' />
                                        <button onClick={deleteInput}>X</button>
                                    </>

                                )
                            })
                        }
                    </div>
                    <button onClick={() => AddInstruction()}>Add step</button>
                </div>
            </div>

        </>
    )
}
