import { Button } from "antd";
import axios from "axios";

const ButtonResetUser = () => {
  function resetUser() {
    return axios
      .post(`${process.env.REACT_APP_DOMAIN_API}/3m/api/user/reset`)
      .then((msg) => {
        console.log(msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <Button onClick={resetUser}>Reset user</Button>;
};

export default ButtonResetUser;
