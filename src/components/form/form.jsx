import { useState } from "react";
import CustomInput from "../CustomInput";


const Form = ({
    id,
    className,
    inputs,
}) => {

    const [ state, setState ] = useState();
    const [ loading, setLoading ] = useState();
    const [ error, setError ] = useState();

    const handleChange = ({ name, value}) => {
        let s = {...state};
        setState({
            ...s,
            [name]: value
        });
    }

    const handleSubmit = () => {
        
    }

    return (
        <form onSubmit={handleSubmit} id={id} className={className}>
            {inputs?.map((el, i) => 
                <label>
                    <span>
                        {el.label}
                    </span>
                    <CustomInput
                        {...el}
                        key={i}
                        onChange={handleChange} 
                    />
                </label>
            )}
        </form>
    )
}

export default Form;