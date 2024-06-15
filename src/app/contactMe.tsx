import React from "react";
import CardComponent from "@/components/ui/cardComponent";

const ContactMe = () => {
    return (
        <div className="bg-black text-white">
            <section id="contact" className="h-1/2 flex flex-col items-center justify-center p-10 md:p-20">
                <h2 className="text-white font-montserrat text-3xl md:text-6xl lg:text-7xl mb-8">Contact Me</h2>
                <div className="flex space-x-6 lg:space-x-20">
                    <a href="https://www.linkedin.com/in/nihal-tangaturu-murthy-601919164/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </a>
                    <a href="mailto:nihaltm2002@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/gmail_icon.png" alt="Gmail" className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </a>
                    <a href="https://github.com/n1haldev" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default ContactMe;