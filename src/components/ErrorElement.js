import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>status Code: {err.status}</h1>
      <h2>status Text: {err.statusText}</h2>
      <h2>error Message: {err.error.message}</h2>
    </div>
  );
};
export default ErrorElement;
