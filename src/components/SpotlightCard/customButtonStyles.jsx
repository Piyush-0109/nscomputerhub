import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(() => ({
    width: "fit-content",
    padding: "0.8rem 2.5rem",
    borderRadius: "25px",
    marginTop: "1rem",
    background: '#0074e2',
    color: 'white',
    border: "1px solid transparent",
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: ".45s ease-in-out",
    '&:hover': {
        background: "white",
        color: "#0074e2",
        border: "1px solid #0074e2",
    },
}));