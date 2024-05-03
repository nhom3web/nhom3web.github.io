const DB_products = [{
    name: "Cafe",
    id: "cafe",
    items: [{
        id: "americanoda",
        title: "Americano Đá",
        price: 40000,
        image: "anh/cafe/americano da.webp"
    }, {
        id: "bacxiu",
        title: "Bạc xỉu",
        price: 35000,
        image: "anh/cafe/bac xiu.webp"
    }, {
        id: "caramelmacchiatoda",
        title: "Caramel Macchiato đá",
        price: 45000,
        image: "anh/cafe/Caramel Macchiato Đá.webp",
        "variant": [
            {
                "id_buy": "1089802596",
                "name": "Nhỏ",
                "check_price": "55.000 đ",
                "price": 55000,
                "reduce": 0,
            },
            {
                "id_buy": "1089802597",
                "name": "Vừa",
                "check_price": "59.000 đ",
                "price": 59000,
                "reduce": 0,
            }
        ],
        "images": [
            "https://product.hstatic.net/1000075078/product/caramel-macchiato_143623_0e070a39d0e54e808db4d91049430b51.jpg",
            "https://product.hstatic.net/1000075078/product/1645971206_53476442-2294790520794961-6801279449942720512-n_b1176e22e0854cb98756db41bfbee1da.jpg",
            "https://product.hstatic.net/1000075078/product/1645971207_img-4933_581a3bec1d9846afaf9baca248613297.jpg"
        ],
        "pic_featured": "//product.hstatic.net/1000075078/product/caramel-macchiato_143623_0e070a39d0e54e808db4d91049430b51_master.jpg",
        "price": 55000,
        "price_sale": 0,
        "percent_sale": 0,
        "product_description": "Khuấy đều trước khi sử dụng\nCaramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
        "tags": [],
        "toppings": [
            {
                "id": "1089802598",
                "name": "Không Topping",
                "price": 0
            },
            {
                "id": "1089802599",
                "name": "Topping Socola",
                "price": 10000
            },
            {
                "id": "1089802600",
                "name": "Topping Caramel",
                "price": 10000
            }
        ]
    }, {
        id: "chocolateda",
        title: "Chocolate đá",
        price: 35000,
        image: "anh/cafe/cholate da.webp"
    }, {
        id: "denda",
        title: "Đen đá",
        price: 35000,
        image: "anh/cafe/den da.jpg"
    }, {
        id: "duongdenmarblelatte",
        title: "Đường đen Marble latte",
        price: 40000,
        image: "anh/cafe/duong den marble latte.webp"
    }, {
        id: "duongdensuada",
        title: "Đường đen sữa đá",
        price: 35000,
        image: "anh/cafe/duong den sua da.webp"
    }, {
        id: "espressoda",
        title: "Espresso đá",
        price: 45000,
        image: "anh/cafe/espresso da.webp"
    }, {
        id: "latteda",
        title: "Latte đá",
        price: 45000,
        image: "anh/cafe/latte da.webp"
    }, {
        id: "suada",
        title: "Sữa đá",
        price: 35000,
        image: "anh/cafe/sua da.webp"
    },
    ]
}, {
    name: "Frosty",
    id: "frosty",
    items: [{
        id: "frostykemdau",
        title: "Frosty kem dâu",
        price: 45000,
        image: "anh/frosty/frosty banh kem dau.webp"
    }, {
        id: "frostycapheduongden",
        title: "Frosty cà phê đường đen",
        price: 45000,
        image: "anh/frosty/frosty ca phe duong den.webp"
    }, {
        id: "frostycaramelarabica",
        title: "Frosty Caramel Arabica",
        price: 45000,
        image: "anh/frosty/frosty caramel arabica.webp"
    }, {
        id: "frostychocochip",
        title: "Frosty Choco Chip",
        price: 45000,
        image: "anh/frosty/frosty choco chip.webp"
    }, {
        id: "frostyphin-gato",
        title: "Frosty Phin-gato",
        price: 45000,
        image: "anh/frosty/frosty phin-gato.png"
    }

    ]
}, {
    name: "Tra",
    id: "tra",
    items: [{
        id: "tradatuyettranchau",
        title: "Hi-tea đá tuyết trân châu",
        price: 40000,
        image: "anh/tra/hi tea da tuyet man muoi tran chau.webp"
    }, {
        id: "hiteadao",
        title: "Hi-tea đào",
        price: 35000,
        image: "anh/tra/hi tea dao.webp"
    }, {
        id: "hiteadautaytranchau",
        title: "Hi-tea dâu tây trân châu",
        price: 45000,
        image: "anh/tra/hi tea dau tay man muoi tran chau.webp"
    }, {
        id: "hiteadaokombucha",
        title: "Hi-tea đào kombucha",
        price: 45000,
        image: "anh/tra/hitea dao kombucha.webp"
    }, {
        id: "hiteayuzukombucha",
        title: "Hi-tea Yuzu kombucha",
        price: 45000,
        image: "anh/tra/hitea yuzu kombucha.webp"
    }, {
        id: "hongtrasuanong",
        title: "Hồng trà sữa nóng",
        price: 35000,
        image: "anh/tra/hong tra sua nong.webp"
    }, {
        id: "hongtrasuatranchau",
        title: "Hồng trà sữa trân châu",
        price: 35000,
        image: "anh/tra/hong tra sua tran chau.webp"
    }, {
        id: "trasuaoolongnuong",
        title: "Trà sữa oolong nướng",
        price: 40000,
        image: "anh/tra/tra sua oolong nuong.webp"
    }, {
        id: "phinsuatuoibanhplan",
        title: "Phin sữa tươi bánh plan",
        price: 40000,
        image: "anh/tra/phin sua tuoi banh plan.webp"
    }, {
        id: "traxanhespressomarble",
        title: "Trà xanh Espresso marble",
        price: 40000,
        image: "anh/tra/tra xanh espresso marble.webp"
    }]

}, {
    name: "BanhNgot",
    id: "banhngot",
    items: [{
        id: "banhmipatecay",
        title: "Bánh mì pate cay",
        price: 25000,
        image: "anh/banh/banh mi pate cay bsl.webp"
    }, {
        id: "buttercroissantsuadac",
        title: "Butter croissant sữa đặc",
        price: 25000,
        image: "anh/banh/butter croissant sua dac bsl.webp"
    }, {
        id: "chabongphomai",
        title: "Chà bông phô mai",
        price: 20000,
        image: "anh/banh/cha bong pho mai bsl.webp"
    }, {
        id: "banhmithitnguoi",
        title: "Bánh mì thịt nguội",
        price: 25000,
        image: "anh/banh/bmi Vn thit nguoi.webp"
    }, {
        id: "chococroffle",
        title: "Choco Croffle",
        price: 30000,
        image: "anh/banh/Choco Croffle.webp"
    }, {
        id: "mochikemchocolate",
        title: "Mochi Kem Chocolate",
        price: 35000,
        image: "anh/banh/Mochi Kem Chocolate.webp"
    }, {
        id: "mochikemduadua",
        title: "Mochi Kem Dừa Dứa",
        price: 35000,
        image: "anh/banh/Mochi Kem Dừa Dứa.webp"
    }, {
        id: "mochikemmatcha",
        title: "Mochi Kem Matcha",
        price: 35000,
        image: "anh/banh/Mochi Kem Matcha.webp"
    }, {
        id: "mochikemphucbontu",
        title: "Mochi kem phúc bồn tử",
        price: 35000,
        image: "anh/banh/mochi kem phuc bon tu.webp"
    }, {
        id: "mochikemvietquat",
        title: "Mochi kem việt quất",
        price: 35000,
        image: "anh/banh/Mochi Kem Việt Quất.webp"
    }, {
        id: "mochikemxoai",
        title: "Mochi kem xoài",
        price: 35000,
        image: "anh/banh/Mochi Kem Xoài.webp"
    }
    ]
}]