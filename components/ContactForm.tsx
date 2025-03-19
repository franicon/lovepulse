export const ContactForm = () => {
    return (
        <div className="bg-white text-[#111827] p-6 md:p-8 rounded-xl shadow-xl">
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Full Name *</label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="mt-1 p-3 w-full border rounded-md border-[#E9EAEC] focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-500 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Phone Number *</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="mt-1 p-3 w-full border rounded-md border-[#E9EAEC] focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-500 transition-all duration-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Email *</label>
                    <input
                        type="email"
                        placeholder="contact@Institution.com"
                        className="mt-1 p-3 w-full border rounded-md border-[#E9EAEC] focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-500 transition-all duration-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message *</label>
                    <textarea
                        placeholder="Message"
                        className="mt-1 p-3 w-full border rounded-md border-[#E9EAEC] focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-500 transition-all duration-300"
                    />
                </div>
                <button className="bg-red-500 text-white py-3 px-6 rounded-md w-full md:w-auto">
                    Send
                </button>
            </form>
        </div>
    );
};
