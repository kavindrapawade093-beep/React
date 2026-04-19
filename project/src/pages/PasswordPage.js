import React from 'react';
import { useRef, useState, useEffect } from 'react';





const PasswordPage = () => {


    const [name, setName] = useState("");


    const [dob, setDob] = useState("");


    const [email, setEmail] = useState("");


    const [file, setFile] = useState(null);





    const [length, setLength] = useState(8);


    const [allowedNumber, setAllowedNumber] = useState(true);


    const [allowedSpecialChar, setAllowedSpecialChar] = useState(false);


    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);



    const selectPass = useRef(null);



    function generatePassword() {


        let pass = "";

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


        if (allowedNumber) str += "0123456789";

        if (allowedSpecialChar) str += "!@#$%&*";


        for (let i = 1; i <= length; i++) {

            let char = Math.floor(Math.random() * str.length + 1);


            pass += str.charAt(char);
        }


        setPassword(pass);
    }



    const copyPassword = () => {


        selectPass.current.select();

        navigator.clipboard.writeText(password);
    };



    useEffect(() => {


        generatePassword();

    }, [length, allowedNumber, allowedSpecialChar]);


    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">


            <div
                className="card shadow-lg p-4 password-card bg-info"
                style={{ width: "400px" }}
            >


                <h3 className="text-center mb-4">
                    Personal info
                </h3>



                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Fullname"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>



                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>



                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="@gmail.com"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Upload File
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>



                <div className="input-group mb-3">


                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        ref={selectPass}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Type or generate password"
                    />

                    <button
                        className="btn btn-outline-secondary bg-primary"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        👀
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={copyPassword}
                    >
                        Copy
                    </button>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Password Length: {length}
                    </label>
                    <input
                        type="range"
                        min="6"
                        max="20"
                        value={length}
                        className="form-range"
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>

                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={allowedNumber}
                        onChange={() => setAllowedNumber(!allowedNumber)}
                    />
                    <label className="form-check-lable">
                        Include Numbers
                    </label>
                </div>


                <div className="form-check mb-4">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={allowedSpecialChar}
                        onChange={() => setAllowedSpecialChar(!allowedSpecialChar)}
                    />
                    <label className="form-check-lable">
                        Include Special Characters
                    </label>
                </div>



                <button
                    onClick={generatePassword}
                    className="btn btn-primary w-100"
                >
                    Generate Password
                </button>

            </div>

        </div>
    );
}


export default PasswordPage;



