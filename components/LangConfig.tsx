"use client";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { ArrowDownIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next/client";

const LangConfig = () => {
  const [lang, setLang] = useState<"uz" | "ru" | "en">("uz");
  const router = useRouter();
  const pathname = usePathname();

  function changeLang(value: "uz" | "ru" | "en") {
    setLang(value);
    router.push(pathname, { locale: value });
  }

  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE");
    if (locale === "uz" || locale === "ru" || locale === "en") {
      setLang(locale);
    }
  }, []);

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#134E9B] text-white rounded-lg shadow-md hover:bg-[#0F3D7A] transition-all">
          <span className="text-[14px] font-semibold capitalize">{lang}</span>
          <ArrowDownIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-white rounded-lg shadow-lg mt-2 p-2 w-28">
        {["ru", "en", "uz"].map((item) => (
          <button
            key={item}
            onClick={() => changeLang(item as "uz" | "ru" | "en")}
            className={`w-full text-left px-4 py-2 text-[14px] font-semibold rounded-md transition-all ${
              lang === item
                ? "bg-[#134E9B] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default LangConfig;
