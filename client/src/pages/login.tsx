import { useForm, SubmitHandler } from "react-hook-form";
import "./login.css";
import { useLogin } from "../api/auth/login";
import { useAuthContext } from "../context/auth";

interface Inputs {
  username: string;
  password: string;
}
export function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { login } = useAuthContext();
  const mutation = useLogin();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await mutation.mutateAsync(data);
    login();
  };

  return (
    <div className="container">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__info">
          <h1 className="login__heading">Login</h1>
          <p className="login__description">to check out hotels</p>
        </div>
        <label htmlFor="username" className="login__label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="login__input"
          {...register("username", { required: true })}
        />
        <label htmlFor="password" className="login__label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="login__input"
          {...register("password", { required: true })}
        />
        <p className="login__error">
          {mutation.isError ? "Username or password incorrect" : null}
        </p>
        <div className="login__form-controls">
          <span className="login__forgot">Forgot Password?</span>
          <button className="login__btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
