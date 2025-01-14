import { Box, Typography, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import useFetch, { host } from "../../utils/Fetch";
const LoginPage = () => {
  const { login } = useContext(UserContext);
  const { postFetch } = useFetch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {

        const dataRes = await postFetch(`${host}usuarios/auth/login/`, data);
        console.log("resLog",dataRes)

      const response = await login(dataRes);
      console.log("bb",data)
      console.log(response.data)

    } catch (error) {
      console.error("Error al hacer login", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          width: "100vh",
          backgroundColor: "#f1f2f3",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: "300px",
        }}>
            <Typography variant="h3">Login Page</Typography>
          <TextField
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
            fullWidth
          />
        <Button variant="contained" onClick={handleLogin}> Login </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default LoginPage;
