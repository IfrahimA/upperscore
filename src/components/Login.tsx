import { FormEvent } from "react";

const Login = () => {
	
    
    const submit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={submit}>
                <div>
                    <label>Username: </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" />
                </div>
            </form>
		</div>
	);
};

export default Login;
