"use client";

import {
  AppStoreIcon,
  ChatIcon,
  FcbookIcon,
  GPlayIcon,
  TgIcon,
  TwtIcon,
  YtIcon,
} from "@/assets/icons";
import { useTranslations } from "next-intl";
import { FaInstagramSquare } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Input } from "antd";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations("Footer");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const menuList = [
    "Ashyo haqida",
    "Foydalanish shartlari",
    "Maxfiylik va hafsizlik siyosati",
    "Mahsulotlarni va tovarlarni qaytarish siyosati",
    "Biz bilan aloqa",
  ];

  return (
    <>
      <div className="block sm:hidden mt-[60px] w-full px-[10px]">
        <strong className="text-[20px] font-bold text-[#000000B2]">
          {t("app")}
        </strong>
        <div className="mt-[12px] flex gap-3">
          <button className="w-[49%] h-[66px] cursor-pointer hover:bg-slate-400 duration-300 flex items-center justify-center bg-[#EBEFF3] rounded-[10px] font-bold text-[#0A1729] text-[16px] gap-3">
            <AppStoreIcon />
            App Store
          </button>
          <button className="w-[49%] h-[66px] cursor-pointer hover:bg-slate-400 duration-300 flex items-center justify-center bg-[#EBEFF3] rounded-[10px] font-bold text-[#0A1729] text-[16px] gap-3">
            <GPlayIcon />
            Google Play
          </button>
        </div>
      </div>
      <div className="px-[10px] py-[30px] lg:px-[131px] lg:py-[60px] flex justify-between">
        <div className="w-[33%] hidden sm:block">
          <strong className="text-[16px] md:text-[20px] font-bold text-[#000000B2]">
            {t("socials")}
          </strong>
          <div className="flex md:gap-1 mt-[10px] md:mt-[21px]">
            {[FcbookIcon, YtIcon, TgIcon, TwtIcon, FaInstagramSquare].map(
              (Icon, index) => (
                <span
                  key={index}
                  className="scale-[0.8] md:scale-1 w-[44px] h-[40px] rounded-[7px] bg-[#EBEFF3] flex items-center cursor-pointer hover:bg-slate-400 duration-300 justify-center"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
          <div className="block mt-[40px]">
            <strong className="text-[16px] md:text-[20px] font-bold text-[#000000B2]">
              {t("app")}
            </strong>
            <div className="mt-[12px] flex gap-3">
              {[AppStoreIcon, GPlayIcon].map((Icon, index) => (
                <button
                  key={index}
                  className="max-w-[188px] scale-[0.8] md:scale-1 w-full h-[66px] cursor-pointer hover:bg-slate-400 duration-300 flex items-center justify-center bg-[#EBEFF3] rounded-[10px] font-bold text-[#0A1729] text-[12px] md:text-[16px] gap-3"
                >
                  <Icon /> {index === 0 ? "App Store" : "Google Play"}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[236px]">
          <strong className="text-[20px] font-bold text-[#000000B2]">
            {t("menu")}
          </strong>
          <ul className="flex flex-col gap-[10px] sm:gap-1 md:gap-3 mt-[18px]">
            {menuList.map((item, index) => (
              <li
                key={index}
                className="text-[12px] md:text-[16px] text-[#000000B2] cursor-pointer hover:opacity-70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="text-[20px] font-bold text-[#000000B2] block">
            {t("contact")}
          </strong>
          <a
            href="tel:+998(71)1234567"
            className="text-[24px] font-bold text-[#06172D] hover:opacity-70 mt-[13px]"
          >
            +998 (71) 123-45-67
          </a>
          <div className="mt-8">
            <p className="text-[16px] text-[#000000B2]">{t("question")}</p>
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder={t("ask")}
                className="placeholder:text-[12px] w-[200px] md:w-[314px] bg-[#EBEFF3] pl-[11px] pr-[40px] py-[10px] md:py-[20px] rounded-[6px] mt-[12px] outline-0"
              />
              <span className="absolute top-[17px] sm:top-[20px] md:top-[30px] right-[10px] sm:right-[30px] md:right-[10px]">
                <ChatIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
