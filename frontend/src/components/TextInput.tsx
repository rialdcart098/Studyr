import type { PropTypes } from "../types.ts";

const TextInput = (props: PropTypes & {name: string}) => {
    return (
        <div>
            <label>
                <input {...props} placeholder={props.name} />
            </label>
        </div>
    )
}
export default TextInput