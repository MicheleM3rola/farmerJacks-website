import logo from "../../public/fjCentro.jpg";
import logoCentro from "../../public/fjcentro2.png";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFacebookF);

export default function Footer() {
  return (
    <footer className=" flex justify-between items-center p-10 bg-neutral text-neutral-content">
      <div className="flex-1">
        <div className="flex gap-3 w-full pb-2">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo FJ"
            className="rounded-lg border border-solid border-white"
          />
          <Image src={logoCentro} width={30} height={30} alt="logo Centro" />
        </div>

        <p>
          Farmer Jack's Forrestfield.
          <br />
          Providing quality goods since 1978
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 flex-1">
        <div className="flex justify-center items-center">
          <span className="footer-title">Company</span>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Catalogue</a>
        </div>
      </div>
      <div className=" flex flex-1 flex-col justify-center items-center">
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FontAwesomeIcon
              icon={faFacebookF}
              size="xl"
              style={{ color: "#0b5dea" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
