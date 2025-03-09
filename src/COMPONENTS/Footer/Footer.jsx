import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-[#1F1F1F] ">
      <div className="footer sm:footer-horizontal text-white p-10">
      <nav>
        <h6 className="footer-title">Legal & Policy Section</h6>
        <a className="link link-hover hover:text-[#E4D804]">Terms of Service</a>
        <a className="link link-hover hover:text-[#E4D804]">Privacy Policy</a>
        <a className="link link-hover hover:text-[#E4D804]">Cookie Policy</a>
        <a className="link link-hover hover:text-[#E4D804]">Copyrigth & DMCA</a>
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
    </div>
    <div>
    <aside>
    <p className="text-white mt-5 justify-center flex">Copyright © {new Date().getFullYear()} - All right reserved by MOvie Portal Industries Ltd</p>
  </aside>
    </div>
  </footer>
  );
};

export default Footer;
