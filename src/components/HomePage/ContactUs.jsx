import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const [submitForm, setSetsubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "male", // Default value for gender
    phone: "", // Default value for phone
    other: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_w2l42sx",
        "template_ygnyg7v",
        e.target,
        "p89IZGlGey1j2RJ5F"
      );
      setSetsubmitForm(true);
      console.log("Email sent successfully");

      // Optionally, reset the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
        gender: "male",
        phone: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const inputStyle =
    "font-inter border-2 border-black bg-white text-black placeholder:text-black focus:outline-none focus:border-4 focus:border-black focus:placeholder-none focus:bg-visionGold rounded-lg h-10 p-2";

  return (
    <form onSubmit={handleSubmit} className="bg-visionBlue p-5">
      <div className="text-2xl text-visionGold font-bold text-center">
        Contact Us
      </div>
      <div className="flex justify-start items-center flex-col gap-4 p-5">
        {/* name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyle}
          required 
          
          // className=
        />
        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          required 
        />
        {/* gender */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male" className="text-white">
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female" className="text-white">
            Female
          </label>
        </div>
        {/* age */}
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          value={formData.age}
          className={inputStyle}
          required 
        />
        {/* area */}
        <input
          type="text"
          name="area"
          id="area"
          placeholder="Area in Chennai"
          value={formData.area}
          className={inputStyle}
          required 
        />
        {/* phone */}
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          className={inputStyle}
          required 
        />
        {/* Dropdown for occupation */}
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className={inputStyle}
          required
        >
          <option value="">Select Occupation</option>
          <option value="Retired Person">Retired Person</option>
          <option value="Employee">Employee</option>
          <option value="Business">Business</option>
          <option value="Looking for a Job">Looking for a Job</option>
          <option value="Insurance agent or advisor">
            Insurance agent or advisor
          </option>
          <option value="Real estate agent">Real estate agent</option>
          <option value="Other">Other</option>
        </select>
        {/* conditional rendering for other */}
        {formData.occupation === "Other" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <AnimatePresence>
              <div>
                <input
                  type="text"
                  name="other"
                  id="other"
                  placeholder="please enter your occupation"
                  value={formData.other}
                  className={inputStyle}
                />
              </div>
            </AnimatePresence>
          </motion.div>
        )}
        {submitForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-white font-playfair font-bold"
          >
            Form submitted successfully
          </motion.div>
        )}
        <button
          type="submit"
          className="bg-visionGold font-bold text-black px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
