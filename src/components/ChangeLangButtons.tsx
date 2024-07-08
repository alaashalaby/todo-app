import { useTranslation } from "react-i18next";
import { BiGlobe } from "react-icons/bi";
import "../i18n";
import { useEffect } from "react";
const ChangeLangButtons = () => {
  const [t,i18n ] = useTranslation();
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const currentLang = localStorage.getItem("i18nextLng") || "en";
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [currentLang,i18n]);
  return (
    <div className="flex items-center  cursor-pointer p-2 rounded-3xl text-[#D72C63] border border-[#D72C63]">
      <BiGlobe className="text-xl" />
      <button
        className="mx-1"
        onClick={() => handleChangeLanguage("en")}
        disabled={i18n.language === "en"}
      >
        {t("English")}
      </button>
      <button
        className=" "
        onClick={() => handleChangeLanguage("ar")}
        disabled={i18n.language === "ar"}
      >
        / {t("Arabic")}
      </button>
    </div>
  );
};

export default ChangeLangButtons;
