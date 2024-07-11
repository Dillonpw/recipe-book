import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-auto flex-col p-4 mt-6">
      <div className="mb-4 flex w-fit flex-col">
        <p className="mb-2 text-lg font-bold underline">Pages</p>
        <ul className="flex flex-col gap-1">
        <li className="un cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="un cursor-pointer">
            <Link href="/new-recipe">Add Recipes</Link>
          </li>
          <li className="un cursor-pointer">
            <Link href="/recipe-list">Recipe List</Link>
          </li>
          <li className="un cursor-pointer">
            <Link href="/social">Social</Link>
          </li>
        </ul>
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
