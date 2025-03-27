import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

const fetchSingleProduct = async (id: string) => {
  if (!id) throw new Error("Product ID is missing");

  try {
    const res = await instance().get(`/products/${id}`);

    if (!res.data || typeof res.data !== "object") {
      throw new Error("Unexpected response format");
    }

    const product = res.data.items || res.data.product || res.data;

    if (!product) {
      throw new Error("Product data is missing");
    }

    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
};

const useSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["single_product", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
};

export default useSingleProduct;
