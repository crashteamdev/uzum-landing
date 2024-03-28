"use client";

import { AppAccordionGroup } from "@/shared/components/AppAccordionGroup";
import { useTranslations } from "next-intl";


const Faq = () => {
    const formattedAccordion = [
        {
            content: `Да, для того чтоб опробовать наш сервис, вам нужно оставить заявку на демо-доступ. После чего с вами свяжется наш менеджер и выдаст доступ к демо-тарифу и ответит на интересующие вас вопросы, а так же поможет разобраться в работе сервиса.`,
            id: 1,
            name: "Можно ли перед покупкой попробовать ваш сервис?"
        },
        {
            content: `Мы собираем данные 3 раза в сутки. Ежедневно следим за изменениями на площадках, чтобы при необходимости быстро менять алгоритмы парсинга. Все это помогает предоставлять нашим клиентам максимально точные данные.`,
            id: 2,
            name: "Ваши аналитические данные точны?"
        },
        {
            content: `Да, на данный момент мы принимаем карты России и Узбекистана.`,
            id: 3,
            name: "Принимаете ли карты других стран?"
        },
        {
            content: `Если вы считаете что функционала нашего сервиса вам не достаточно для изучения рынка, вы можете написать нам напрямую и объяснить свою точку зрения. Мы в свою очередь прислушаемся к вам и добавим недостающий функционал. Мы всегда открыты к предложениям наших клиентов!`,
            id: 4,
            name: "Мне не хватает функционала, что делать?"
        },
        {
            content: `Мы всегда открыты к сотрудничеству, если вы блогер или автор курсов, свяжитесь с нами и мы обсудим выгодные условия для ваших учеников или подписчиков. Если вы владелец бизнеса работающий по направлению B2B и ваши услуги предоставляются в том числе для продавцов на маркетплейсах, пишите нам и обговорим наше с вами сотрудничество!`,
            id: 5,
            name: "Я автор курсов / блогер / владелец бизнеса"
        },
    ];

    const formattedAccordionList = useTranslations("Faq");
    return (
        <div className="py-[125px] bg-[#061C3D] max-md:py-[50px]">
            <div className="container">
                <div className="mb-[72px]">
                    <div className="text-white mb-[32px] text-center text-[56px] leading-[60px] tracking-[-1.12px] font-bold max-md:text-[28px] max-md:leading-[28.8px]">{formattedAccordionList("title")}</div>
                    <div className="text-[#B4BBC5] text-[18px] leading-[26px] font-normal text-center w-full max-w-[750px] m-auto max-md:text-[16px] max-md:leading-[24px]">{formattedAccordionList("desc")}</div>
                </div>
                <div>
                <AppAccordionGroup
                    items={formattedAccordion || []}
                    isFirstOpen={false}
                    accordionContentSlot={(item) => (
                        <div dangerouslySetInnerHTML={{ __html: item?.content || [] }} />
                    )}
                />
                </div>
            </div>
        </div>
    );
};

export default Faq;