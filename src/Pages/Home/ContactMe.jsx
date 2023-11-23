import { useForm } from "react-hook-form";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {
  //   const {
  //     register,
  //     trigger,
  //     formState: { errors },
  //   } = useform();

  //   const onSubmit = async (e) => {
  //     const isValid = await trigger();
  //     if (!isValid) {
  //       e.preventDefault();
  //     }
  //   };

  return (
    <div className="custom-container text-white ">
      <div className="text-center text-7xl font-bold text-white relative mb-20 mt-20 uppercase ">
        <span className="border-b-8 border-primaryColor absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-20  "></span>
        Contact Me
      </div>
      <div className="bg-secondaryBgColor rounded-3xl  mb-20 text-center ">
        <div className=" flex flex-col lg:flex-row  ">
          <div className="flex-auto  lg:w-2/5  w-full bg-[#2c2c30] rounded-s-3xl  ">
            <div className="my-10 flex flex-col space-y-14 ">
              <div className="flex justify-end gap-2 ">
                <div className=" text-3xl  font-semibold ">CONTACT</div>
                <div className="h-1 w-64 my-auto  bg-white"></div>
              </div>

              {/* Contact Details Start */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-1 items-center justify-start ps-20">
                  <FaPhoneAlt />: +8801789502830
                </div>
                <div className="flex gap-1 items-center justify-start ps-20">
                  <FaEnvelope />: abidhasan00123@gmail.com
                </div>
                <div className="flex gap-1 items-center justify-start ps-20">
                  <FaLocationDot />: Dhaka, Bangladesh
                </div>
              </div>
              {/* Contact Details end */}
              <div className="h-1 w-64 bg-white "></div>
            </div>
          </div>
          <div className="flex-auto lg:w-3/5 w-full ">
            <div className="mt-20">form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
