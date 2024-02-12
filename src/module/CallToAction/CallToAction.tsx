import ArrowNext from "@/shared/components/icons/arrowNext";
import Image from "next/image";

export const CallToAction = () => {
    return (
        <div style={{background: "linear-gradient(107.49deg, #203252 -0.68%, #79a9fe 100.79%)"}}>
            <div className="container">
                <div className="flex gap-[134px] items-center">
                    <div className="w-full max-w-[536px] h-[536px] relative">
                        <Image fill src="/images/calltoaction.png" alt="Оставить заявку"  />
                    </div>
                    <div className="text-white flex flex-col gap-[40px]">
                        <div className="text-[56px] font-bold leading-[60px] tracking-[-1.12px]">Бесплатное тестирование!</div>
                        <div className="text-[18px] font-normal leading-[26px]">Оставьте заявку на тестирование демо доступа и получите бесплатный чеклист для вашего магазина!</div>
                        <a href="/" className="btn--orange rounded-[7px] h-[48px] text-white text-[16px] font-bold leading-[48px] gap-[12px] flex items-center w-[278px] justify-center">Оставить заявку <ArrowNext color="white" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};