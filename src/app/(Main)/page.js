import CreactAcountAndPrincing from "@/Components/Homepage/CreateAcountCTA/CreactAcountAndPrincing";
import FeaturesJob from "@/Components/Homepage/FeaturesJob/FeaturesJob";
import Findjob from "@/Components/Homepage/Findjob/Findjob";
import PublishedJobsCard from "@/Components/Homepage/PublishedJobsCard/PublishedJobsCard";
import Statistics from "@/Components/Homepage/Statistics/Statistics";
import PricingCard from "./pricing/PricingCard";
import { subscriptionPlans } from "@/lib/actions/seeker/subscriptionPlans";


export default async function Home() {
  const plans = await subscriptionPlans();

  return (
    <div>
      <Findjob></Findjob>
      <Statistics />
      <PublishedJobsCard></PublishedJobsCard>
      <FeaturesJob></FeaturesJob>
      <PricingCard subscriptionPlans={plans}   ></PricingCard>
      <CreactAcountAndPrincing></CreactAcountAndPrincing>
    </div>
  );
}
