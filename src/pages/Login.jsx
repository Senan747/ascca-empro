import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mdi/react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Button } from "@mui/material";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    finCode: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      if (setShowAlert) {
        setShowAlert(false);
      }
    }, [4000]);
  };

  const handleSubmit = () => {
    navigate("/user");
  };

  return (
    <div className="w-screen max-h-screen bg-dgka bg-top bg-cover flex justify-center relative">
      <div className="bg-gega-white min-h-screen w-[600px] opacity-90 max-md:w-full">
        <div className="w-full h-50 flex items-center justify-center pt-5">
          <img src="dgka-logo.png" className="w-[50%] h-full" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center pt-10 gap-2">
          <p className="text-3xl font-semibold font-Fira text-center">
            Hesabınıza daxil olun
          </p>
          <p className="text-center">
            Hesab məlumatlarınızı digər şəxslərlə paylaşmayın
          </p>
        </div>
        <div className="mt-10 w-full text-center">
          <form
            className="flex flex-col gap-5 mx-[50px]"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              id="finCode"
              label="Fin kod"
              value={values.finCode}
              onChange={handleChange("finCode")}
              variant="outlined"
            />
            <FormControl variant="outlined" required>
              <InputLabel htmlFor="password">Şifrə</InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      <Icon
                        path={
                          values.showPassword ? mdiEyeOutline : mdiEyeOffOutline
                        }
                        size={1}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Daxil ol
            </Button>
          </form>
          <p className="pt-5 hover:cursor-pointer" onClick={handleClick}>
            Şifrənizi unutmusunuz?
          </p>
        </div>
      </div>
      {showAlert && (
        <Alert severity="info" className="absolute bottom-3 animate-pulse">
          <AlertTitle>Info</AlertTitle>
          Bu barədə Rəhbərliyə xəbər verin:
          <a href="tel:+4733378901" className="pl-3">
            Zəng: +4733378901
          </a>
        </Alert>
      )}
    </div>
  );
}

export default Login;
