let questions = [
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/1_ezcge0.jpg",
        Question: "Czy szkło można poddać recyklingowi nieskończoną ilość razy?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Szkło można wielokrotnie poddawać recyklingowi bez utraty jego wytrzymałości."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893681/2_aqn2yv.jpg",
        Question: "Czy wiesz, co należy zrobić z plastikowymi torbami?",
        a: "Aby mogły zostać poddane recyklingowi, muszą wrócić do sprzedaży detalicznej",
        b: "Plastikowe torby można wrzucić do domowego kosza na śmieci",
        c: null,
        d: null,
        answer: "a",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/3_xwi2vv.png",
        Question: "Czy każdy metal nadaje się do recyklingu?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894198/4_ebhxu6.jpg",
        Question: "Czy pocięty papier można poddać recyklingowi?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Pocięty papier może zostać poddany recyklingowi."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894546/11_oodvzx.jpg",
        Question: "Który z tych metalowych przedmiotów nadaje się do recyklingu w Twoim koszu na surowce wtórne?",
        a: "Wieszaki",
        b: "Śrubki",
        c: "Sztućce",
        d: "Żadne z powyższych",
        answer: "d",
        details: "Sprzęt sortujący w sortowni recyklingu nie jest przeznaczony do obsługi przedmiotów metalowych, które nie mają kształtu pojemnika (puszki i butelki)."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893675/9_h26g9a.jpg",
        Question: "Który z podanych przedmiotów może zostać poddany recyklingowi?",
        a: "Folia bąbelkowa",
        b: "Puste puszki po aerozolu",
        c: "Karteczki samoprzylepne",
        d: "Tubka pasty do zębów",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/8_dkrxni.jpg",
        Question: "Który z podanych przedmiotów NIE może zostać poddany recyklingowi?",
        a: "Folia cynowa",
        b: "Użyte pudełka po pizzy",
        c: "Baterie",
        d: "Szkło",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638999556/energizer-energizer-batteries-352_wblhat.jpg",
        Question: "Baterie jednorazowego użytku należy wyrzucić do kosza na surowce wtórne",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: "Baterie – jednorazowe lub ładowalne – nigdy nie powinny trafiać do kosza na surowce wtórne."
    }
]

let questionsZap = [
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/1_ezcge0.jpg",
        Question: "Czy szkło można poddać recyklingowi nieskończoną ilość razy?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Szkło można wielokrotnie poddawać recyklingowi bez utraty jego wytrzymałości."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893681/2_aqn2yv.jpg",
        Question: "Czy wiesz, co należy zrobić z plastikowymi torbami?",
        a: "Aby mogły zostać poddane recyklingowi, muszą wrócić do sprzedaży detalicznej",
        b: "Plastikowe torby można wrzucić do domowego kosza na śmieci",
        c: null,
        d: null,
        answer: "a",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/3_xwi2vv.png",
        Question: "Czy każdy metal nadaje się do recyklingu?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894198/4_ebhxu6.jpg",
        Question: "Czy pocięty papier można poddać recyklingowi?",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "a",
        details: "Pocięty papier może zostać poddany recyklingowi."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638894546/11_oodvzx.jpg",
        Question: "Który z tych metalowych przedmiotów nadaje się do recyklingu w Twoim koszu na surowce wtórne?",
        a: "Wieszaki",
        b: "Śrubki",
        c: "Sztućce",
        d: "Żadne z powyższych",
        answer: "d",
        details: "Sprzęt sortujący w sortowni recyklingu nie jest przeznaczony do obsługi przedmiotów metalowych, które nie mają kształtu pojemnika (puszki i butelki)."
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893675/9_h26g9a.jpg",
        Question: "Który z podanych przedmiotów może zostać poddany recyklingowi?",
        a: "Folia bąbelkowa",
        b: "Puste puszki po aerozolu",
        c: "Karteczki samoprzylepne",
        d: "Tubka pasty do zębów",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638893680/8_dkrxni.jpg",
        Question: "Który z podanych przedmiotów NIE może zostać poddany recyklingowi?",
        a: "Folia cynowa",
        b: "Użyte pudełka po pizzy",
        c: "Baterie",
        d: "Szkło",
        answer: "b",
        details: ""
    },
    {
        Image: "https://res.cloudinary.com/djrceu2jo/image/upload/v1638999556/energizer-energizer-batteries-352_wblhat.jpg",
        Question: "Baterie jednorazowego użytku należy wyrzucić do kosza na surowce wtórne",
        a: "Tak",
        b: "Nie",
        c: null,
        d: null,
        answer: "b",
        details: "Baterie – jednorazowe lub ładowalne – nigdy nie powinny trafiać do kosza na surowce wtórne."
    }
]

export {questions, questionsZap}