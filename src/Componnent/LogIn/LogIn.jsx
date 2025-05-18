import { useContext } from "react";
import { Auth } from "../../AuthProvider/AuthProvider";

const LogIn = () => {
  const { name } = useContext(Auth);

  return (
    <div>
      <h3 className="text-5xl font-extrabold text-center text-emerald-600">
        This is {name}
      </h3>
    </div>
  );
};

export default LogIn;
