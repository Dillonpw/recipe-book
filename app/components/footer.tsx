import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 flex h-auto flex-col border-t-2 border-gray-100 bg-none p-4 px-[5%] pt-10">
      <div className="mb-4 flex w-full justify-between">
        <div>
          <p className="mb-2 text-lg font-bold underline">Pages</p>
          <ul className="flex flex-col gap-1">
            <li className="un cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="un cursor-pointer">
              <Link href="/recipe-list">Recipes</Link>
            </li>
            <li className="un cursor-pointer">
              <Link href="/new-recipe">Add Recipes</Link>
            </li>

            <li className="un cursor-pointer">
              <Link href="/social">Social</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-1 mt-10 text-md">
            <li className="un cursor-pointer">
              <p>Privacy Policy</p>
            </li>
            <li className="un cursor-pointer">
              <p>Terms of Service</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <Link
          className="un ml-1"
          href="https://github.com/Dillonpw"
          target="_blank"
        >
          Dillonpw
        </Link>
        <p className="ml-1 text-center">Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
