"use client";
import Image from "next/image";
import useSingleProduct from "../../../../service/getSingleProduct";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IMG_API } from "@/hooks/getEnv";
import { useTranslations } from "next-intl";
import {
  ClockIcon,
  CompareIcon,
  LikeIcon,
  ShipIcon,
  ShopIcon,
} from "@/assets/icons";
import DiscountProduct from "@/modules/Products/DiscountProducts";
import Features from "@/modules/Products/SingleProduct/Fatures";
import Opinions from "@/modules/Products/SingleProduct/Opinions";
import Footer from "@/modules/Footer/page";

const ProductPage = () => {
  const t = useTranslations("SingleProduct");
  const [selected, setSelected] = useState("features");

  const { id } = useParams() as { id: string };

  if (!id) return <div>Invalid Product ID</div>;

  const { data, isLoading, error } = useSingleProduct(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!data) return <div>No product found</div>;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <div className="containers">
        <h2 className="font-bold text-[16px] sm:text-[32px]">{data?.name}</h2>
        <div className="mt-[31px] block md:flex gap-[32px]">
          <div className="w-full md:w-[49%] h-[430px] bg-[#EBEFF3] rounded-[10px] flex items-center justify-center relative">
            <Image
              className="w-[341px] h-[341px]"
              src={`${IMG_API}/${data.image}`}
              width={341}
              height={341}
              alt="Product img"
              priority
            />
            <div className="absolute flex top-6 right-8 gap-5 text-[#5F728B]">
              <CompareIcon />
              <LikeIcon />
            </div>
          </div>
          <div className="w-full md:w-[49%] mt-[31px]">
            <div className="block sm:hidden mb-6">
              <p>{t("color")}</p>
              <div className="mt-[20px] flex gap-5">
                <span className="w-[34px] h-[34px] rounded-[3px] bg-[#BA2525] inline-block"></span>
                <span className="w-[34px] h-[34px] rounded-[3px] bg-[#111111] inline-block"></span>
                <span className="w-[34px] h-[34px] rounded-[3px] bg-[#FFFFFF] inline-block shadow-lg"></span>
                <span className="w-[34px] h-[34px] rounded-[3px] bg-[#DADADA] inline-block "></span>
                <span className="w-[34px] h-[34px] rounded-[3px] bg-[#40CEFF] inline-block"></span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[16px] text-[#515D6C]">{t("price")}</p>
              <strong className="font-bold text-[32px] text-[#06172D]">
                {formatPrice(data?.price)}{" "}
                <span className="text-[24px]"> UZS</span>
              </strong>
            </div>
            <div className="w-full md:w-[474px] h-[56px] flex items-center justify-center bg-[#EBEFF3] rounded-[6px]">
              <p className="text-[#545D6A] text-[16px]">{t("parting-pay")}</p>
            </div>
            <div className="flex gap-[14px]">
              <button className="w-[50%] md:w-[230px] text-[16px] h-[56px] cursor-pointer hover:opacity-70 duration-300 text-[#134E9B] border-[1px] border-[#134E9B] rounded-[6px] mt-[10px]">
                {t("save")}
              </button>
              <button className="w-[50%] md:w-[230px] text-[16px] h-[56px] cursor-pointer hover:opacity-70 duration-300 text-[white] border-[1px] border-[#134E9B] bg-[#134E9B] rounded-[6px] mt-[10px]">
                {t("purchase")}
              </button>
            </div>
            <ul className="flex mt-[43px] flex-col gap-[20px]">
              <li className="flex items-center gap-[16px] text-[#06172DB2]">
                <ShipIcon />
                {t("delivery")}
              </li>
              <li className="flex items-center gap-[16px] text-[#06172DB2]">
                <ShopIcon />
                {t("shop-promotion")}
              </li>
              <li className="flex items-center gap-[16px] text-[#06172DB2]">
                <ClockIcon />
                {t("delivery-date")}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[80px]">
          <div className="flex gap-[85px]">
            <strong
              className={`${
                selected === "features"
                  ? "text-[06172D] border-b-[#06172D] border-b-[2px] font-bold"
                  : "text-[#515D6C] font-normal"
              } text-[18px] cursor-pointer`}
              onClick={() => setSelected("features")}
            >
              {t("features")}
            </strong>
            <strong
              className={`${
                selected === "opinions"
                  ? "text-[#06172D] border-b-[#06172D] border-b-[2px] font-bold"
                  : "text-[#515D6C] font-normal"
              } cursor-pointer text-[18px]`}
              onClick={() => setSelected("opinions")}
            >
              {t("opinions")}
            </strong>
          </div>
          {selected === "features" ? <Features id={id} /> : <Opinions />}
        </div>
      </div>
      <div className="mt-[100px]">
        <DiscountProduct title={t("lastSeen")} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
