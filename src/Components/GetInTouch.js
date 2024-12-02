import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import "./Getintouch.css";

function Getintouch() {
    let data = {
        name: "",
        email: "",
        subject: "",
        mobilenumber: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        mobilenumber: Yup.string()
            .required("Mobile number is required")
            .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
        subject: Yup.string()
            .required("Subject is required")
            .min(5, "Subject must be at least 5 characters"),
    });

    const { handleChange, handleSubmit, values, resetForm, isSubmitting, errors, touched } = useFormik({
        initialValues: data,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:8080/add-enq", values);
                console.log(values.name);
                alert(" Submitted ! Thank you! You will receive an email.");
                resetForm();
            } catch (error) {
                console.error(error);
                alert("Submission failed. Please try again.");
            }
        },
    });

    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div
                    className="mask d-flex align-items-center h-100 gradient-custom-3"
                    style={{ backgroundColor: "white" }}
                >
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div
                                    className="card"
                                    style={{ borderRadius: "15px" }}
                                >
                                    <div
                                        className="card-body p-5"
                                        style={{ backgroundColor: "#162633" }}
                                    >
                                        <h2
                                            className="text-uppercase text-center mb-5"
                                            style={{ color: "white" }}
                                        >
                                            Got a Query?
                                        </h2>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control form-control-lg"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="name"
                                                    style={{ color: "white" }}
                                                >
                                                    Your Name
                                                </label>
                                                {touched.name && errors.name && (
                                                    <div className="text-danger">{errors.name}</div>
                                                )}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control form-control-lg"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="email"
                                                    style={{ color: "white" }}
                                                >
                                                    Your Email
                                                </label>
                                                {touched.email && errors.email && (
                                                    <div className="text-danger">{errors.email}</div>
                                                )}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="mobilenumber"
                                                    name="mobilenumber"
                                                    className="form-control form-control-lg"
                                                    value={values.mobilenumber}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="mobilenumber"
                                                    style={{ color: "white" }}
                                                >
                                                    Your Mobile Number
                                                </label>
                                                {touched.mobilenumber && errors.mobilenumber && (
                                                    <div className="text-danger">{errors.mobilenumber}</div>
                                                )}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <textarea
                                                    id="subject"
                                                    name="subject"
                                                    className="form-control form-control-lg"
                                                    rows="6"
                                                    placeholder="I would love to hear what you have to say!"
                                                    value={values.subject}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                ></textarea>
                                                <label
                                                    className="form-label"
                                                    htmlFor="subject"
                                                    style={{ color: "white" }}
                                                >
                                                    Subject
                                                </label>
                                                {touched.subject && errors.subject && (
                                                    <div className="text-danger">{errors.subject}</div>
                                                )}
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    style={{ color: "white" }}
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? (
                                                        <span>
                                                            <span
                                                                className="spinner-border spinner-border-sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            ></span>
                                                            Submitting...
                                                        </span>
                                                    ) : (
                                                        "Submit"
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Getintouch;
