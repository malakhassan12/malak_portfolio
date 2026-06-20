import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/Form/Form";

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5CF6] dark:text-white mb-3">
          Let&apos;s Work Together
        </h1>
        <p className="text-[#001F3F] dark:text-white/40 text-sm md:text-base max-w-2xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Fill out the
          form below or reach out directly.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left - Contact Form */}
        <div className="w-full lg:w-[55%] xl:w-[60%]">
          <div className="bg-purple-100 dark:bg-transparent dark:bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full lg:w-[45%] xl:w-[40%] lg:sticky lg:top-24">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-[#8B5CF6] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full" />
              Contact Information
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
