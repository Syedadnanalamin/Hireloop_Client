import React from 'react';
import { HelpCircle, ShieldCheck } from 'lucide-react';

const Faq = () => {
    return (
        <div>
            <div className="mx-auto mt-36 max-w-4xl">
                <div className="space-y-4 text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-base-content/10 bg-base-content/5 px-4 py-1.5 text-xs font-semibold text-base-content/70">
                        <HelpCircle className="h-4.5 w-4.5" />
                        Support & FAQ
                    </div>
                    <h2 className="text-3xl font-extrabold text-base-content tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base text-base-content/60">
                        Have questions about billing, plans, or features? Find answers below or contact support.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="collapse collapse-plus rounded-2xl border border-base-300 bg-base-200/50 shadow-sm transition-all duration-200 hover:border-base-content/10">
                        <input type="radio" name="faq" defaultChecked />
                        <div className="collapse-title text-lg font-bold text-base-content py-5">
                            Can I cancel my subscription anytime?
                        </div>
                        <div className="collapse-content text-base-content/75 pb-5">
                            Yes. You can cancel whenever you want from your account dashboard. Your subscription will
                            remain active until the end of your current billing period.
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-2xl border border-base-300 bg-base-200/50 shadow-sm transition-all duration-200 hover:border-base-content/10">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-lg font-bold text-base-content py-5">
                            Do you offer refunds?
                        </div>
                        <div className="collapse-content text-base-content/75 pb-5">
                            Refund requests are reviewed on a case-by-case basis depending
                            on the subscription and billing history. Contact support if you need assistance.
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-2xl border border-base-300 bg-base-200/50 shadow-sm transition-all duration-200 hover:border-base-content/10">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-lg font-bold text-base-content py-5">
                            Which payment methods are accepted?
                        </div>
                        <div className="collapse-content text-base-content/75 pb-5">
                            We accept all major credit/debit cards (Visa, MasterCard, American Express) processed securely via Stripe.
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-2xl border border-base-300 bg-base-200/50 shadow-sm transition-all duration-200 hover:border-base-content/10">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-lg font-bold text-base-content py-5">
                            Can I switch plans later?
                        </div>
                        <div className="collapse-content text-base-content/75 pb-5">
                            Absolutely. You can upgrade or downgrade your subscription at
                            any time from your dashboard, and your billing will be pro-rated accordingly.
                        </div>
                    </div>
                </div>

                {/* Bottom Security Trust Badge */}
                <div className="mt-16 flex items-center justify-center gap-2.5 text-sm text-base-content/60 bg-base-200/30 w-fit mx-auto px-6 py-3 rounded-full border border-base-300/80">
                    <ShieldCheck className="h-5 w-5 text-success" />
                    <span>Secured 256-bit SSL connection. Payments processed via <strong>Stripe</strong>.</span>
                </div>
            </div>
        </div>
    );
};

export default Faq;