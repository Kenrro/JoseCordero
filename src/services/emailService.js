import React from "react";
import emailjs from "emailjs-com"
export const sendMail = (e) => {
    
    emailjs.sendForm(
        "service_p5asdeo",
        "template_wppscf3",
        e,
        "V793ZC8sT1D-cLTp3"
    )
    .then(() => {
      alert("Formulario enviado correctamente!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Ocurrió un error al enviar.");
    });
}