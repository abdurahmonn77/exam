import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

const fetchProductVariation = async (id: string) => {
  if (!id) throw new Error("Product ID is missing");

  try {
    const res = await instance().get(`/variations/${id}`);

    console.log("Full API Response:", res.data);
    console.log("Extracted Items:", res.data.items);

    let variations = res.data.items || res.data.variations || res.data;

    if (!Array.isArray(variations)) {
      console.warn(
        "Variations is not an array. Converting to array:",
        variations
      );
      variations = [variations];
    }

    return variations;
  } catch (error) {
    console.error("Failed to fetch product variations:", error);
    throw error;
  }
};

const useProductVariation = (id: string) => {
  return useQuery({
    queryKey: ["product_variation", id],
    queryFn: () => fetchProductVariation(id),
    enabled: !!id,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
};

export default useProductVariation;
