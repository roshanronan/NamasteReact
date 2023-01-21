
import { useFormik,Formik ,Form, Field, ErrorMessage} from "formik";

//for validation pass a funtion and its keys must be same as initialValues.
const validate =(values)=> {
    const errors={}
    if(!values.email){
        errors.email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Not a valid Email."
    }

    if(!values.password){
        errors.password= "Required"
    }else if(values.password.length <8){
        errors.password = "Password must be 8 or more charecters."
    }

    return errors
}

const Login = () =>{
    // using useFormic hook
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:(values)=>{
            alert(JSON.stringify(values, null, 2));
        }
    })
  
    return(
        <div className="login-contaner">
            <h1>Login Page</h1>
            <div className="form-container">
                <form onSubmit={formik.handleSubmit}>  
                <label>Email</label>
                <input type="text" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
                <label>Password</label>
                <input type="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                { formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}
                <button type="submit">Submit</button>
                </form>
            
            </div>
        </div>
    )


    //using Formik Component

    // return(
    //     <Formik 
    // initialValues={{ email: '', password: '' }}
    // validate={values => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}
    // onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }}
    // >
    // {({ isSubmitting }) => (
    //     <Form>
    //       <Field type="email" name="email" />
    //       <ErrorMessage name="email" component="div" />
    //       <Field type="password" name="password" />
    //       <ErrorMessage name="password" component="div" />
    //       <button type="submit" disabled={isSubmitting}>
    //         Submit
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
    // )
}

export default Login;