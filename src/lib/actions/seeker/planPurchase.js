import { serverPost } from "@/lib/core/server"

export const planPurchase = async (data) => {


    const result = await serverPost("/payment/success", data)
}