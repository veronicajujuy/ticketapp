import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onClear = () => {
    reset();
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="ingrese nombre"
          {...register("name", { required: true })}
        />
        <input
          placeholder="ingrese apellido"
          {...register("lastname", { required: true })}
        />
        <input
          placeholder="ingrese email"
          {...register("email", { required: true })}
        />
        <input
          placeholder="ingrese contraseña"
          {...register("password", { required: true })}
        />
        <button type="button" onClick={onClear}>
          Borrar
        </button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;
