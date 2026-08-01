import React from 'react';
import PricingCard from './PricingCard';
import { subscriptionPlans } from '@/lib/actions/seeker/subscriptionPlans';
import Faq from '@/Components/Shared/FAQ/Faq';

const PricingSection = async () => {

    const plans = await subscriptionPlans();


    return (
        <div>
            <PricingCard subscriptionPlans={plans}></PricingCard>
            <Faq></Faq>
        </div>
    );
};

export default PricingSection; 