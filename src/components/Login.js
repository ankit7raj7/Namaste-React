import { Field, useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues:{
            userName: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="login">
            <label htmlFor="userName"> User Name</label>
            <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}></input>
            
            <label htmlFor="password">Password</label>
            <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}></input>

            <button type="submit">Log in</button>
        </form>
    );

}

export default Login;