import footerImg from "../../assets/logo-xl.png"
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#244D3F]  p-10">
      <footer className="footer footer-horizontal footer-center text-primary-content w-9/12 mx-auto">
        <aside>
          <img src={footerImg} alt="" />
          <p className="font-bold">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <h6 className="text-white text-lg">Social Links</h6>
          <div className="grid grid-flow-col gap-4 text-[#101727]">
            <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <RiInstagramFill className="h-4 w-4" />
              </a>
            </div>
            <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <FaFacebookSquare className="h-4 w-4" />

              </a>
            </div>
            <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <FaXTwitter className="h-4 w-4" />
              </a>

            </div>

          </div>
        </nav>
      </footer>
      <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-gray-400 text-sm border-gray-500 border-t p-10">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>

        <div className="grid grid-flow-col gap-4">
          <a>
            Privacy Policy
          </a>
          <a>
            Terms of Service
          </a>
          <a>
            Cookies
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;