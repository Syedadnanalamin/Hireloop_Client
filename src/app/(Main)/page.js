import CreactAcountAndPrincing from "@/Components/Homepage/CreateAcountCTA/CreactAcountAndPrincing";
import FeaturesJob from "@/Components/Homepage/FeaturesJob/FeaturesJob";
import Findjob from "@/Components/Homepage/Findjob/Findjob";
import Pricing from "@/Components/Homepage/Pricing/Pricing";
import PublishedJobsCard from "@/Components/Homepage/PublishedJobsCard/PublishedJobsCard";
import Statistics from "@/Components/Homepage/Statistics/Statistics";


export default function Home() {
  return (
    <div>
      <Findjob></Findjob>
      <Statistics />
      <PublishedJobsCard></PublishedJobsCard>
      <FeaturesJob></FeaturesJob>
      <Pricing></Pricing>
      <CreactAcountAndPrincing></CreactAcountAndPrincing>
    </div>
  );
}
