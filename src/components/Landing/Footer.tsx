import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D0C13] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="flex justify-between items-start w-full py-10">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-white font-bold text-lg sm:text-xl font-dmSans">
                  BRIGHT YOUTH ACADEMY
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm font-dmSans">
                  BE YOURSELF & FIND PEACE
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm font-dmSans">
              Bright Youth Academy is Bangladesh's leading <br /> Up-skilling & Job
              Placement Platform.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold font-dmSans">
              Contact Info
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <img
                  src="/icons/footer/location.svg"
                  alt="Location"
                  className="w-5 h-5 mt-1 opacity-60"
                />
                <p className="text-white text-sm font-dmSans">
                  Chandrima Model Town,
                  <br />
                  Mohammadpur - 1027
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/icons/footer/phone.svg"
                  alt="Phone"
                  className="w-5 h-5 opacity-60"
                />
                <p className="text-white text-sm font-dmSans">
                  +8801849597210
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/icons/footer/email.svg"
                  alt="Email"
                  className="w-5 h-5 opacity-60"
                />
                <p className="text-white text-sm font-dmSans">
                  Support@domain.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold font-dmSans">
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
                  className="text-gray-300 hover:text-white transition-colors text-sm font-dmSans inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm font-dmSans"
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm font-dmSans"
              >
                Privacy Policy
              </Link>
              <Link
                to="/report"
                className="text-gray-400 hover:text-white transition-colors text-sm font-dmSans"
              >
                Report an Issue
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-dmSans text-center sm:text-right">
              @2025 All Rights Reserved to Bright Youth Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
