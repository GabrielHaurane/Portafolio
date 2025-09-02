import emailjs from "emailjs-com";
import { useForm } from 'react-hook-form';
const Form = ({name, email, message, button, successMessage, errorMessage}) => {
      const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,   
        import.meta.env.VITE_EMAILJS_TEMPLATE,  
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
      )
      .then(
        (result) => {
          console.log({successMessage}, result.text);
          reset();
        },
        (error) => {
          console.error({errorMessage}, error.text);
        }
      );
  };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow w-50 ms-5 mt-5 " style={{ backgroundColor: "#5a297a" }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">{name}</label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: "Este campo es obligatorio" })}
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">{email}</label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...register("email", { required: "Este campo es obligatorio" })}
        />
        {errors.email && <small className="text-danger">{errors.email.message}</small>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">{message}</label>
        <textarea
          id="message"
          rows="4"
          className="form-control"
          {...register("message", { required: "Este campo es obligatorio" })}
        />
        {errors.message && <small className="text-danger">{errors.message.message}</small>}
      </div>
<div className='d-flex justify-content-center'>
      <button type="submit" className="btn btn-outline-violet">{button}</button>
</div>

      {isSubmitSuccessful && (
        <div className="alert alert-success mt-3">{successMessage}</div>
      )}
    </form>
    );
};

export default Form;