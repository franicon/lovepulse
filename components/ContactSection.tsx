import {ContactForm} from "@/components/ContactForm";

const ContactSection = () => {
    return (
        <section className="bg-red-500 text-white">
            {/* Left Text Section */}
           <div className="container mx-auto">
               <div className=" py-12 px-6 md:px-20 flex flex-col lg:flex-row items-center xl:gap-30 lg:gap-10 space-y-6">
                   <div className="flex-1 lg:max-w-md">
                       <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Us</h2>
                       <p className="text-lg leading-relaxed font-light">
                           Whether you’re a researcher or an institutional admin, we look forward to
                           working with you to accelerate research. Leave your details and
                           we’ll set up a meeting with you.
                       </p>
                   </div>

                   {/* Right Form Section */}
                   <div className="flex-1 w-full ">
                       <ContactForm />
                   </div>
               </div>

           </div>
        </section>

    );
};

export default ContactSection;
