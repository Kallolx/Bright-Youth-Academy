import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D0C13] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 py-6 sm:py-8 lg:py-10">
          {/* Logo and Description - Left Side */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-white font-bold text-lg sm:text-xl ">
                  BRIGHT YOUTH ACADEMY
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm ">
                  BE YOURSELF & FIND PEACE
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm  max-w-sm mx-auto lg:mx-0">
              Bright Youth Academy is Bangladesh's leading Up-skilling & Job
              Placement Platform.
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mt-6">
              {[
                { icon: "facebook", label: "Facebook" },
                { icon: "insta", label: "Instagram" },
                { icon: "twit", label: "Twitter" },
                { icon: "in", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
                >
                  <img
                    src={`/icons/footer/${social.icon}.svg`}
                    alt={social.label}
                    className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Center and Right Sections Container */}
          <div className="flex flex-col sm:flex-row justify-between lg:justify-end lg:w-2/3 gap-10 sm:gap-20 lg:gap-32">
            {/* Contact Info - Center */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-white text-lg font-bold ">
                Contact Info
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-center sm:justify-start space-x-3">
                  <img
                    src="/icons/footer/location.svg"
                    alt="Location"
                    className="w-5 h-5 mt-1 opacity-60"
                  />
                  <p className="text-gray-300 text-sm ">
                    Chandrima Model Town,
                    <br />
                    Mohammadpur - 1027
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <img
                    src="/icons/footer/phone.svg"
                    alt="Phone"
                    className="w-5 h-5 opacity-60"
                  />
                  <p className="text-gray-300 text-sm ">
                    +8801849597210
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <img
                    src="/icons/footer/email.svg"
                    alt="Email"
                    className="w-5 h-5 opacity-60"
                  />
                  <p className="text-gray-300 text-sm ">
                    Support@domain.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links - Right */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-white text-lg font-bold ">
                Quick Links
              </h2>
              <div className="flex flex-col space-y-3">
                {[
                  { to: "/courses", label: "Courses" },
                  { to: "/mentor", label: "Mentor" },
                  { to: "/about-us", label: "About Us" },
                  { to: "/testimonials", label: "Testimonials" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors text-sm  inline-flex items-center justify-center sm:justify-start group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm "
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm "
              >
                Privacy Policy
              </Link>
              <Link
                to="/report"
                className="text-gray-400 hover:text-white transition-colors text-sm "
              >
                Report an Issue
              </Link>
            </div>
            <p className="text-gray-400 text-sm  text-center sm:text-right">
              @2025 All Rights Reserved to Bright Youth Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
