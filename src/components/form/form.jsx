import { useCallback, useState, useEffect } from "react";
import CustomInput from "../CustomInput";
import { sendEmail } from "../../utils/mailer";
import Spinner from "../spinner/spinner";
import { useNotification } from "../../hooks/NotificationContext";
import { validate } from "../../utils/helpers";
import Title from "../title/title";
import "./form.scss";


const Form = ({
    id,
    className,
    inputs,
    method = "post",
    emailTemplateId = "",
    submitButtonLabel = "Submit",
    bgColor,
    textColor,
    title = "",
    submitButtonStyle="primary",
    inputBgColor=""
}) => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const { setNotification } = useNotification();

    useEffect(() => {
        if (error)
            setNotification({ type: "error", detail: error });
    }, [error]);

    const handleChange = useCallback(({ name, value }) => {
        let s = { ...state, [name]: value };
        setState(s);
    }, [state]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        let values = {};
        for (let el of inputs) {
            let validation = el.validation;
            let value = state[el.name];
            if (validation) {
                let isValid = validate(value, validation, el.label)
                if (isValid !== true) {
                    console.log("isValid", isValid);
                    setError(isValid);
                    return;
                }
            }
            values[el.name] = value;
        }

        handleActions(values);
    }, [state, inputs]);

    const handleActions = useCallback((values) => {
        switch (method) {
            case "post":
                break;
            case "email":
                handleSendEmail(values);
                break;
            default:
                console.log("values", values);
        }
    }, [method]);

    const handleSendEmail = useCallback(async (values) => {
        try {
            setLoading(true);
            if (!emailTemplateId) {
                throw new Error("Template Id is required to send form data as email");
            }
            await sendEmail(emailTemplateId, values);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
            setState({});
        }
    }, []);

    return (
        <div
            className="form-container section titled-section"
            id={id}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            <div className="container">
                {title &&
                    <Title title={title} />
                }
                <form onSubmit={handleSubmit} className={className}>
                    {inputs?.map((el, i) =>
                        <label key={i} style={{width: el.width || ""}}>
                            <span>
                                {el.label}
                            </span>
                            <CustomInput
                                {...el}
                                value={state[el.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    )}
                    <div className="btn-container">
                        <button className={`btn btn-${submitButtonStyle}`}>
                            {loading ? <Spinner size={1} /> : submitButtonLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;