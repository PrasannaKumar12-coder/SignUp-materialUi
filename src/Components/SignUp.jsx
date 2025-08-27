import * as React from 'react';
import { Typography } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import './SignUp.css'

const SignUp = () => {
    function MyFormHelperText() {
        const { focused } = useFormControl() || {};

        const helperText = React.useMemo(() => {
            if (focused) {
                return 'This field is being focused';
            }

            return 'Helper text';
        }, [focused]);

        return <FormHelperText>{helperText}</FormHelperText>;
    }

    // checkbox
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div>

            <div style={{
                border: "1px solid #212937",
                borderRadius: "10px",
                padding: "40px",
                color: "white",
                width: "23vw",
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                background: "radial-gradient(circle,#04111e,#060e18)"
            }}>
                <Typography variant='h4' sx={{ textAlign: "left", fontWeight: "600", mb: "30px" }}>
                    Sign up
                </Typography>

                {/* username */}
                <div>
                    <p style={{ color: "#94a0b8", marginBottom: "10px" }}>
                        Full name
                    </p>
                    <form noValidate autoComplete="off">
                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput className='input-box' sx={{
                                border: "1px solid #212937",
                                backgroundColor: "#05070a",
                                height: "42px", color: "#94a0b8",
                                borderRadius: "8px"
                            }}
                                title='Please fill out this field'
                                placeholder="Prasanna Kumar" />
                        </FormControl>
                    </form>
                </div>

                {/* Email */}
                <div style={{ marginTop: "20px" }}>
                    <p style={{ color: "#94a0b8", marginBottom: "10px" }}>
                        Email
                    </p>
                    <form noValidate autoComplete="off">
                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput className='input-box' sx={{
                                border: "1px solid #212937",
                                backgroundColor: "#05070a",
                                height: "42px", color: "#94a0b8",
                                borderRadius: "8px"
                            }}
                                type='Email'
                                placeholder="kumar@gmial.com" />
                        </FormControl>
                    </form>
                </div>

                {/* password */}
                <div style={{ marginTop: "20px" }}>
                    <p style={{ color: "#94a0b8", marginBottom: "10px" }}>
                        Password
                    </p>
                    <form noValidate autoComplete="off">
                        <FormControl sx={{ width: '100%' }}>
                            <OutlinedInput className='input-box' sx={{
                                border: "1px solid #212937",
                                backgroundColor: "#05070a",
                                height: "42px", color: "#94a0b8",
                                borderRadius: "8px"
                            }}
                                type='password'
                                placeholder="••••••" />
                        </FormControl>
                    </form>
                </div>

                {/* checkbox */}
                <div style={{ paddingTop: "10px" }}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked sx={{ color: "black" }} />}
                            label="I want to receive updates via email."
                            componentsProps={{
                                typography: { fontSize: "15px" }
                            }}
                        />
                    </FormGroup>
                </div>

                {/* login button */}
                <div>
                    <Button variant="contained"
                        sx={{
                            width: "100%", height: "40px",
                            fontSize: "13px", backgroundColor: "white",
                            color: "black", mt: "10px", borderRadius: "10px", textTransform: "capitalize"
                        }}>
                        Sign up
                    </Button>
                </div>

                {/* or line */}
                <div style={{ display: "flex", alignItems: "center", textAlign: "center", margin: "20px 0", cursor: "po" }}>
                    <hr style={{ flex: 1, border: "none", borderTop: "1px solid #212a38" }} />
                    <span style={{ padding: "0 10px", color: "gray", fontWeight: "500" }}>or</span>
                    <hr style={{ flex: 1, border: "none", borderTop: "1px solid #212a38" }} />
                </div>

                {/* google button */}
                <div className='loginThoughButton' style={{
                    marginBottom: "20px",
                    color: "white",
                    backgroundColor: "#0b0e14",
                    height: "40px",
                    width: "100%",
                    border: "1px solid #505b75",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}>
                    <FcGoogle style={{ fontSize: "20px" }} /> &nbsp; Sign up with Google
                </div>

                {/* facebook button */}
                <div className='loginThoughButton' style={{
                    color: "white",
                    backgroundColor: "#0b0e14",
                    height: "40px",
                    width: "100%",
                    border: "1px solid #505b75",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}>
                    <FaFacebook style={{ backgroundColor: "blue", color: "white", borderRadius: "50%", fontSize: "20px" }} /> &nbsp; Sign up with Facebook
                </div>

                {/* signup alredy have account */}
                <div style={{
                    textAlign: "center",
                    paddingTop: "15px",
                }}>
                    Already have an account? <span style={
                        {
                            textDecoration: "underline",
                            cursor: "pointer",
                            textUnderlineOffset: "4px",
                            textDecorationColor: "#303946",
                        }}>Sign in</span>
                </div>

            </div>
        </div >
    )
}

export default SignUp
