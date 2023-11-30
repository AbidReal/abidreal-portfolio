import { useForm } from "react-hook-form";
import { FaEnvelope, FaEnvelopeOpenText, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="custom-container text-white ">
      <div className="customTitle mb-10 lg:mb-32 mt-20">
        <span className="customTitleDesign  "></span>
        Contact Me
      </div>
      <div className="bg-secondaryBgColor rounded-3xl  mb-36 text-center ">
        <div className=" flex flex-col lg:flex-row  ">
          <div className="flex-auto  lg:w-2/5  w-full bg-greyColor rounded-s-3xl  ">
            <div className=" grid grid-cols-1 gap-4 content-evenly h-full my-10 lg:my-0 ">
              <div className="flex justify-end gap-2  ">
                <div className=" hidden lg:block lg:text-3xl  font-semibold ">
                  CONTACT
                </div>
                <div className="h-1 w-64 my-auto  bg-white"></div>
              </div>

              {/* Contact Details Start */}
              <div className="flex flex-col gap-4 text-lg sm:ps-36 lg:ps-24 my-10 lg:my-0 justify-center mx-auto  lg:mx-0 ">
                <div className="flex gap-1 items-center justify-start">
                  <FaPhoneAlt />: +8801789502830
                </div>
                <div className="flex gap-1 items-center justify-start">
                  <FaEnvelope />: abidhasan00123@gmail.com
                </div>
                <div className="flex gap-1 items-center justify-start">
                  <FaLocationDot />: Dhaka, Bangladesh
                </div>
              </div>
              {/* Contact Details end */}
              <div className="h-1 w-64 bg-white "></div>
            </div>
          </div>
          {/* Form Section */}
          <div className="flex-auto lg:w-3/5 w-full  ">
            <div className="mt-10">
              <div>
                <form
                  target="_blank"
                  onSubmit={onSubmit}
                  action="https://formsubmit.co/36b3a266b39aed34c10c4824d22cb3ca"
                  method="POST"
                >
                  <div className=" flex w-11/12 justify-between mx-auto mt-10 ">
                    <div className="w-5/12 ">
                      <input
                        className="input w-full bg-[#2c2c30]"
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                          required: true,
                          maxLength: 100,
                        })}
                      />
                      <p className="text-red-500 mt-1 ">
                        {errors &&
                          errors.name &&
                          errors.name.type === "required" &&
                          "Please enter your name"}
                        {errors &&
                          errors.name &&
                          errors.name.type === "maxLength" &&
                          "Max length is 100 char."}
                      </p>
                    </div>

                    <div className="w-6/12">
                      <input
                        className="input w-full bg-[#2c2c30]"
                        type="email"
                        placeholder="EMAIL"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                      <p className="text-red-500 mt-1 ">
                        {errors &&
                          errors.email &&
                          errors.email.type === "required" &&
                          "Email is required"}
                        {errors &&
                          errors.email &&
                          errors.email.type === "pattern" &&
                          "Invalid email address."}
                      </p>
                    </div>
                  </div>

                  <input
                    className="input w-11/12 mt-10 bg-[#2c2c30] "
                    type="text"
                    placeholder="SUBJECT"
                    {...register("subject", {
                      required: false,
                      maxLength: 200,
                    })}
                  />
                  <p className="text-red-500 mt-1 ">
                    {errors &&
                      errors.subject &&
                      errors.subject.type === "maxLength" &&
                      "Max length is 200 char."}
                  </p>

                  <textarea
                    className="textarea textarea-bordered textarea-lg w-11/12  mt-10 bg-[#2c2c30]"
                    type="text"
                    placeholder="MESSAGE"
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  <p className="text-red-500 mt-1 ">
                    {errors &&
                      errors.message &&
                      errors.message.type === "required" &&
                      "Message is required"}
                    {errors &&
                      errors.message &&
                      errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                  <div className="flex justify-end w-11/12 mx-auto ">
                    <button
                      type="submit"
                      className="btn hover:bg-hoverColor active:bg-activeColor bg-primaryColor text-black items-center text-lg text-center font-semibold px-10  rounded-xl transition-colors duration-300 mb-10 mt-9 "
                    >
                      <FaEnvelopeOpenText />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
