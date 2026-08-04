import { serverPost } from "@/lib/actions/server"

export const planPurchase = async (data) => {


    const result = await serverPost("/payment/success", data)
}