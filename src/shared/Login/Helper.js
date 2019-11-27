import axios from "axios";

const modalClose = () => {
    $("#exampleModalCenter").modal("hide");
};

const setHeaderToken = (token) => {
    if (token) {
        axios.defaults.headers.common["auth-token"] = token;
        localStorage.setItem("infoToken", JSON.stringify(token));
    }
};

const removeHeaderToken = () => {
    localStorage.removeItem("infoToken");
    delete axios.defaults.headers.common["auth-token"];
};

const formValidate = (getClassName) => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.getElementsByClassName(getClassName);
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
};

export { modalClose, setHeaderToken, removeHeaderToken, formValidate };
