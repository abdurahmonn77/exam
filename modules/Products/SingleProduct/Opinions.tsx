import { StarIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import React from "react";

const Opinions = () => {
  const t = useTranslations("SingleProduct");
  return (
    <div className="mt-[45px]">
      <div>
        <div className="flex gap-[14px] items-end">
          <span className="w-[64px] h-[64px] rounded-full bg-[#D9D9D9] inline-block"></span>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[18px] text-[#06172D]">Evgeniy Viktorovich</p>
            <div className="flex gap-[2px]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="pl-[71px] mt-[18px] max-w-[600px]">
          <p className="text-[12px] text-[#00000066]">September 3, 2022</p>
          <p className="text-[16px] text-[#515D6C] mt-[9px]">{t("comment")}</p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="flex gap-[14px] items-end">
          <span className="w-[64px] h-[64px] rounded-full bg-[#D9D9D9] inline-block"></span>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[18px] text-[#06172D]">Evgeniy Viktorovich</p>
            <div className="flex gap-[2px]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="pl-[71px] mt-[18px] max-w-[600px]">
          <p className="text-[12px] text-[#00000066]">September 3, 2022</p>
          <p className="text-[16px] text-[#515D6C] mt-[9px]">{t("comment")}</p>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
