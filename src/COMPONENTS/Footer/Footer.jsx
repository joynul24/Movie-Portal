import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#1F1F1F] text-white p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover hover:text-[#E4D804]">Branding</a>
        <a className="link link-hover hover:text-[#E4D804]">Design</a>
        <a className="link link-hover hover:text-[#E4D804]">Marketing</a>
        <a className="link link-hover hover:text-[#E4D804]">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover hover:text-[#E4D804]">About us</a>
        <a className="link link-hover hover:text-[#E4D804]">Contact</a>
        <a className="link link-hover hover:text-[#E4D804]">Jobs</a>
        <a className="link link-hover hover:text-[#E4D804]">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
         <p><FaFacebook></FaFacebook></p>
         <p><FaTwitter></FaTwitter></p>
         <p><FaInstagram></FaInstagram></p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
