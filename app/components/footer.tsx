import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-auto flex h-24 items-center justify-center shadow-inner">
      <Link className="un" href="https://github.com/Dillonpw" target="_blank">
        {" "}
        Dillonpw
      </Link>{" "}
      <p className="ml-4">Copyright © 2024</p>
    </footer>
  );
};
export default Footer;
