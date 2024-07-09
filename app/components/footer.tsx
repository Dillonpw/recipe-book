import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto flex h-auto flex-col p-4 shadow-inner">
      <div className="mb-4 flex w-fit flex-col">
        <p className="font-bold underline mb-2 text-lg">Pages</p>
        <ul className="flex flex-col gap-1">
          <li className="un cursor-pointer">
            <Link href="/new-recipe">Add Recipes</Link>
          </li>
          <li className="un cursor-pointer">
            <Link href="/recipe-list">Recipe List</Link>
          </li>
          <li><Link href="/social">Social</Link></li>
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
        <p className="text-center ml-1">Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
