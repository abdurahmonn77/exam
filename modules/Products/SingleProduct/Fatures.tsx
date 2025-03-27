import useProductVariation from "@/service/getProductVariation";
import React, { FC } from "react";

const Features: FC<{ id: string | undefined }> = ({ id }) => {
  const { data, isLoading, isError } = useProductVariation(id || "");

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Failed to load variations.</p>;

  type DataItem = {
    label: string;
    value: string;
  };

  const specs: DataItem[] = data.map((item: any) => ({
    label: item.name,
    value: item.options?.[0]?.value || "N/A",
  }));

  return (
    <table
      style={{ borderCollapse: "collapse" }}
      className="max-w-[651px] w-full mt-[45px]"
    >
      <tbody>
        {specs.map((item, index) => (
          <tr
            key={index}
            className="flex justify-between pr-[100px]"
            style={{ borderBottom: "1px dashed #aaa" }}
          >
            <td className="text-[#545D6A] text-[16px] py-[11px]">
              {item.label}
            </td>
            <td className="text-[#545D6A] text-[16px] py-[11px]">
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Features;
