import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const ProjectsBtn = () => {
  const { t } = useLanguage();
  return (
  <Link href={'/work'} className="relative ">
  <div >{t.home.cta}</div>
  </Link>

);
};

export default ProjectsBtn;
