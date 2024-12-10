import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useFetch, { postFetch, host } from "../../utils/Fetch";
const RegisterPage = () => {
  const { postFetchFormData } = useFetch();
  const [data, setData] = useState({
    email: "",
    imagen: null,
    nombre: "",
    apellido: "",
    password: "",
    alumno: true,
    telefono: "",
    imagenUrl: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("nombre", data.nombre);
    formData.append("apellido", data.apellido);
    formData.append("password", data.password);
    formData.append("telefono", data.telefono);
    formData.append("imagen", data.imagen);
    formData.append("alumno", data.alumno);


    try {
      const dataRes = await postFetchFormData(
        `${host}usuarios/sign-up/`,
        formData
      );
      console.log("resLog", dataRes);
    } catch (error) {
      console.error("Error al hacer registro", error);
    }
  };

  const handleImagenChange = (event) => {
    const MAX_FILE_SIZE_MB = 20;
    let file = event.target.files[0];

    if (file?.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`La imagen debe ser menor a ${MAX_FILE_SIZE_MB} MB`);
      setData({ ...data, imagen: null });
    } else {
      let img = document.createElement("img");
      img.src = URL.createObjectURL(file);

      img.onerror = () => {
        alert("Hubo un error al cargar la imagen.");
      };

      img.onload = () => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");

        const originalWidth = img.width;
        const originalHeight = img.height;

        const maxDimension = 800;

        let newWidth, newHeight;
        if (originalWidth > originalHeight) {
          newWidth = maxDimension;
          newHeight = (originalHeight * maxDimension) / originalWidth;
        } else {
          newHeight = maxDimension;
          newWidth = (originalWidth * maxDimension) / originalHeight;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
          let newFile = new File([blob], "image.jpeg", { type: "image/jpeg" });
          const imageURL = URL.createObjectURL(newFile);
          setData({ ...data, imagen: newFile, imagenUrl: imageURL });
        }, "image/jpeg");
      };
    }
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Typography variant="h3">Register Page</Typography>
          <TextField
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Nombre"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Apellido"
            name="apellido"
            value={data.apellido}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Telefono"
            name="telefono"
            value={data.telefono}
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
          <Button
            variant="contained"
            component="label"
            sx={{
              background: "#033E8C",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px", // Espacio entre el icono y el texto
              transition: "transform 0.3s",
              "&:hover": {
                background: "#FF3370",
                transform: "scale(1.05)",
              },
            }}
          >
            <UploadFileIcon />
            <input
              type="file"
              accept="image/*"
              onChange={handleImagenChange}
              hidden/>
          </Button>
          <Button variant="contained" onClick={handleRegister}>
            {" "}
            Registro{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
