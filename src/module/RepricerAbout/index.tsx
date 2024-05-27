"use client";

import Image from "next/image";
import { data } from "./static";
import ArrowNext from "@/shared/components/icons/arrowNext";
import clsx from "clsx";
import { useModal } from '@/shared/hooks/useModal';
import { AppModalDemo } from "@/components/AppModalDemo";

const RepricerAbout = () => {

    const { open, handleToggle, handleClose } = useModal();
    return (
        <>
            <div className="bg-white py-[124px] max-md:py-[50px]">
                <div className="container">
                    <div className="flex flex-col gap-[15px] mb-[72px]">
                        {/* <div className="relative w-[100px] h-[80px] max-md:hidden">
                            <Image src="/images/repricer/bg.png" fill  alt="Сервис автоматического изменения цен на маркетплейсах" />
                        </div> */}
                        <div className="title">Сервис автоматического изменения цен</div>
                        <div className="desc desc w-full max-w-[700px]">Дополнительный буст для твоих продаж на маркетплейсах! Изучи востребованный инструмент, чтоб оставаться конкурентноспособным. </div>
                    </div>
                    <div className="flex gap-[24px] w-full max-lg:flex-col">
                        {data.map((item, key) => (
                            <div key={key} className={clsx("h-[450px] relative w-full rounded-[16px] p-[32px] flex flex-col gap-[24px] max-md:gap-[15px] max-md:h-full max-md:p-[15px] bg-[#061C3D] text-white")}>
                                <div className="max-md:relative max-md:h-[100px] max-md:w-full max-md:max-w-[100px]">
                                    <Image className="max-md:absolute" src={`/images/repricer/${item.icon}`} alt={item.title} width={148} height={148} />
                                </div>
                                <div className="flex flex-col gap-[12px]">
                                    <div className="text-[24px] font-medium leading-[32px] max-md:text-[20px] max-md:leading-[24px]">{item.title}</div>
                                    <div className="text-[16px] font-normal leading-[24px] max-md:text-[14px] max-md:leading-[20px]">{item.desc}</div>
                                </div>
                                <div className="absolute max-md:static bottom-[32px] rounded-[7px] bg-white h-[48px] text-[#061C3D] text-[16px] font-bold leading-[48px] gap-[12px] flex items-center w-[278px] justify-center max-md:text-[14px] max-md:h-[40px] max-md:w-full cursor-pointer" onClick={handleToggle}>Пробовать бесплатно <ArrowNext color="#061C3D" /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AppModalDemo open={open} handleClose={handleClose} />
        </>
    );
};

export default RepricerAbout;