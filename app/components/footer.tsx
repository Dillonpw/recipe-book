import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col h-auto shadow-inner p-4">
      <div className="flex flex-col mb-4 w-fit">
        <p className="font-bold">Pages</p>
        <ul className="flex flex-col gap-1">
        <li className="un cursor-pointer">
            <Link href="/new-recipe">Add Recipes</Link>
          </li>
          <li className="un cursor-pointer">
            <Link href="/recipe-list">Recipe List</Link>
          </li>

        </ul>
      </div>
      <div className="flex justify-center mb-4">
        <p>Made with ❤️ by</p>
        <Link className="un ml-1" href="https://github.com/Dillonpw" target="_blank">
          Dillonpw
        </Link>
      </div>
      <p className="text-center">Copyright © 2024</p>
    </footer>
  );
};

export default Footer;
