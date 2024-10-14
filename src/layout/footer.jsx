import Logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center ">
          <img src={Logo} alt="" className="h-10 w-auto" />
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Hemanth
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Experience
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Eduction
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
