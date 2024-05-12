import Link from "next/link";
import { BreadcrumbProps } from "./breadcrumb.interface";

const Breadcrumb = ({ backSite, pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium dark:text-white text-black" href="/">
              Home /
            </Link>
          </li>
          {backSite.map((site, key) => (
            <li key={key}>
              <Link className="font-medium dark:text-white text-black" href={site.href}>
                {site.name} /
              </Link>
            </li>
          ))}
          <li className="font-medium text-green-600 dark:text-yellow-400">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
