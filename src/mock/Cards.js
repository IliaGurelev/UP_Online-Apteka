const cardsMock = [
    {
        image: "https://asevalar.ru/upload/iblock/e80/iru2ymzubfbickt2n7is6205jqoasdh2_1920_1080.jpg",
        name: "Пиносол. Капли от насморка",
        price: "130",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=dd4dadd8507d92ccb5dc46daa95a4a1397bf9baa-7742796-images-thumbs&n=13",
        name: "Стрепсилс. Strepsils. Таблетки 24 шт",
        price: "250",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=b5f80136e3d3cc68222d6b87e2187f0d_l-5347001-images-thumbs&n=13",
        name: "Аспирин Bayer. Таблетки 10 шт",
        price: "80",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=147b832003b5f3dee741b7340ed81ca054263666abacb34e-5245909-images-thumbs&n=13",
        name: "Граммидин. Спрей от кашля.",
        price: "239",
    },
    {
        image: "https://avatars.mds.yandex.net/get-mpic/4393885/img_id3132394615552469675.png/orig",
        name: "АнвиМакс. Порошок от гриппа 12 шт.",
        price: "349",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=de361d9b280648ac26a6a90b630c9b8b495966f9-5656190-images-thumbs&n=13",
        name: "АнтиГриппин. Против гриппа пакетики 10 шт.",
        price: "289",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=02201b615bd87bff82f04193fb947c5c_l-4559678-images-thumbs&n=13",
        name: "Терафлю. От гриппа и простуды. Таблетки 10 шт",
        price: "349",
    },
    {
        image: "https://asevalar.ru/upload/iblock/e80/iru2ymzubfbickt2n7is6205jqoasdh2_1920_1080.jpg",
        name: "Пиносол. Капли от насморка",
        price: "130",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=dd4dadd8507d92ccb5dc46daa95a4a1397bf9baa-7742796-images-thumbs&n=13",
        name: "Стрепсилс. Strepsils. Таблетки 24 шт",
        price: "250",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=b5f80136e3d3cc68222d6b87e2187f0d_l-5347001-images-thumbs&n=13",
        name: "Аспирин Bayer. Таблетки 10 шт",
        price: "80",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=147b832003b5f3dee741b7340ed81ca054263666abacb34e-5245909-images-thumbs&n=13",
        name: "Граммидин. Спрей от кашля.",
        price: "239",
    },
    {
        image: "https://avatars.mds.yandex.net/get-mpic/4393885/img_id3132394615552469675.png/orig",
        name: "АнвиМакс. Порошок от гриппа 12 шт.",
        price: "349",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=de361d9b280648ac26a6a90b630c9b8b495966f9-5656190-images-thumbs&n=13",
        name: "АнтиГриппин. Против гриппа пакетики 10 шт.",
        price: "289",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=02201b615bd87bff82f04193fb947c5c_l-4559678-images-thumbs&n=13",
        name: "Терафлю. От гриппа и простуды. Таблетки 10 шт",
        price: "349",
    },
    {
        image: "https://asevalar.ru/upload/iblock/e80/iru2ymzubfbickt2n7is6205jqoasdh2_1920_1080.jpg",
        name: "Пиносол. Капли от насморка",
        price: "130",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=dd4dadd8507d92ccb5dc46daa95a4a1397bf9baa-7742796-images-thumbs&n=13",
        name: "Стрепсилс. Strepsils. Таблетки 24 шт",
        price: "250",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=b5f80136e3d3cc68222d6b87e2187f0d_l-5347001-images-thumbs&n=13",
        name: "Аспирин Bayer. Таблетки 10 шт",
        price: "80",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=147b832003b5f3dee741b7340ed81ca054263666abacb34e-5245909-images-thumbs&n=13",
        name: "Граммидин. Спрей от кашля.",
        price: "239",
    },
    {
        image: "https://avatars.mds.yandex.net/get-mpic/4393885/img_id3132394615552469675.png/orig",
        name: "АнвиМакс. Порошок от гриппа 12 шт.",
        price: "349",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=de361d9b280648ac26a6a90b630c9b8b495966f9-5656190-images-thumbs&n=13",
        name: "АнтиГриппин. Против гриппа пакетики 10 шт.",
        price: "289",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=02201b615bd87bff82f04193fb947c5c_l-4559678-images-thumbs&n=13",
        name: "Терафлю. От гриппа и простуды. Таблетки 10 шт",
        price: "349",
    },
    {
        image: "https://asevalar.ru/upload/iblock/e80/iru2ymzubfbickt2n7is6205jqoasdh2_1920_1080.jpg",
        name: "Пиносол. Капли от насморка",
        price: "130",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=dd4dadd8507d92ccb5dc46daa95a4a1397bf9baa-7742796-images-thumbs&n=13",
        name: "Стрепсилс. Strepsils. Таблетки 24 шт",
        price: "250",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=b5f80136e3d3cc68222d6b87e2187f0d_l-5347001-images-thumbs&n=13",
        name: "Аспирин Bayer. Таблетки 10 шт",
        price: "80",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=147b832003b5f3dee741b7340ed81ca054263666abacb34e-5245909-images-thumbs&n=13",
        name: "Граммидин. Спрей от кашля.",
        price: "239",
    },
    {
        image: "https://avatars.mds.yandex.net/get-mpic/4393885/img_id3132394615552469675.png/orig",
        name: "АнвиМакс. Порошок от гриппа 12 шт.",
        price: "349",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=de361d9b280648ac26a6a90b630c9b8b495966f9-5656190-images-thumbs&n=13",
        name: "АнтиГриппин. Против гриппа пакетики 10 шт.",
        price: "289",
    },
    {
        image: "https://avatars.mds.yandex.net/i?id=02201b615bd87bff82f04193fb947c5c_l-4559678-images-thumbs&n=13",
        name: "Терафлю. От гриппа и простуды. Таблетки 10 шт",
        price: "349",
    },
];

export default cardsMock;