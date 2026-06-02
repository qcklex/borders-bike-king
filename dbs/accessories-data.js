const accessoriesData = [

    // ── TOOLS ──────────────────────────────────────────────────────────────
    {
        id: 1,
        name: "SKS Rookie XS Mini Pump",
        category: "tools",
        price: 14,
        img: "../assets/main/accessories/pump-4.webp",
        description: "Compact plastic mini pump compatible with Presta and Schrader valves. Light enough for a jersey pocket or saddle bag — never get stranded with a flat."
    },
    {
        id: 2,
        name: "Muc-Off Utility Belt",
        category: "tools",
        price: 8,
        img: "../assets/main/accessories/pump-3.webp",
        description: "Universal rubber mounting strap that attaches a can of Muc-Off BAM cleaner — or any similar can — securely to your seat post or frame tube."
    },
    {
        id: 3,
        name: "Cable Lock with Key",
        category: "tools",
        price: 12,
        img: "../assets/main/accessories/lock-1.webp",
        description: "Lightweight 60cm coiled steel cable in a blue PVC sleeve, secured with a key barrel lock. Handy for quick low-risk stops on the trail."
    },
    {
        id: 4,
        name: "Kryptonite 10mm Cable Loop",
        category: "tools",
        price: 18,
        img: "../assets/main/accessories/lock-2.webp",
        description: "Long braided steel security cable with loop ends and a vinyl coating. Thread it through a U-lock to secure wheels, a second bike, or extra kit."
    },
    {
        id: 5,
        name: "Retractable Combination Lock",
        category: "tools",
        price: 14,
        img: "../assets/main/accessories/lock-3.webp",
        description: "Compact hi-vis yellow retractable cable lock with a 3-digit resettable combination. Pocket-sized and ideal for quick stops when riding trails."
    },
    {
        id: 6,
        name: "Kryptonite U-Lock",
        category: "tools",
        price: 45,
        img: "../assets/main/accessories/lock-4.webp",
        description: "Hardened 13mm steel shackle U-lock with a double-deadbolt mechanism. Sold Secure Gold rated — serious security for urban parking and trail car parks."
    },
    {
        id: 7,
        name: "Combination Cable Lock",
        category: "tools",
        price: 16,
        img: "../assets/main/accessories/lock-5.webp",
        description: "120cm coiled cable lock with a 4-digit resettable combination. Flexible black PVC sleeve protects your frame finish from scratches."
    },
    {
        id: 8,
        name: "Kryptonite KryptoFlex Cable Lock",
        category: "tools",
        price: 22,
        img: "../assets/main/accessories/lock-6.webp",
        description: "180cm braided steel cable with protective sleeve and double-deadbolt key barrel. Use it alongside a U-lock for extended reach at tricky anchor points."
    },

    // ── OTHERS ─────────────────────────────────────────────────────────────
    {
        id: 9,
        name: "Lazer Compact Helmet — Black",
        category: "others",
        price: 42,
        img: "../assets/main/accessories/helmet-1.webp",
        description: "Lightweight all-rounder helmet with 11 vents, an adjustable retention dial, and removable visor. CE EN1078 certified. Glossy black finish."
    },
    {
        id: 10,
        name: "Lazer Compact Helmet — Yellow",
        category: "others",
        price: 42,
        img: "../assets/main/accessories/helmet-2.webp",
        description: "High-visibility neon yellow Lazer Compact with 11-vent ventilation, retention fit dial, and removable visor. CE EN1078 certified."
    },
    {
        id: 11,
        name: "Lazer Compact Helmet — Red",
        category: "others",
        price: 42,
        img: "../assets/main/accessories/helmet-3.webp",
        description: "Bold red Lazer Compact with 11 vents, retention dial, and a removable visor. Lightweight and comfortable for trail and commute use."
    },
    {
        id: 12,
        name: "Lazer Compact Helmet — White",
        category: "others",
        price: 42,
        img: "../assets/main/accessories/helmet-4.webp",
        description: "Clean gloss white Lazer Compact — 11 vents, adjustable fit system, removable visor. A classic look that works on road or trail."
    },
    {
        id: 13,
        name: "Lazer Compact Helmet — Graphite",
        category: "others",
        price: 42,
        img: "../assets/main/accessories/helmet-5.webp",
        description: "Subtle graphite finish Lazer Compact with 11 vents and retention dial. A versatile everyday lid for trail riding and commuting."
    },
    {
        id: 14,
        name: "Lazer Compact Helmet — Forest Green",
        category: "others",
        price: 45,
        img: "../assets/main/accessories/helmet-6.webp",
        description: "Dark forest green Lazer helmet with a slightly lower-profile shell and deep internal padding. Great for trail rides through the Borders."
    },
    {
        id: 15,
        name: "Madison Thermal Full-Finger Gloves",
        category: "others",
        price: 28,
        img: "../assets/main/accessories/gloves-1.webp",
        description: "Blue windproof thermal gloves with reflective diagonal stripes and a wrist cinch cuff. Touchscreen-compatible fingertips for on-bike navigation."
    },
    {
        id: 16,
        name: "Fox Ranger MTB Gloves — Neon Yellow",
        category: "others",
        price: 30,
        img: "../assets/main/accessories/gloves-2.webp",
        description: "High-vis neon yellow full-finger Fox MTB gloves with a breathable mesh back and synthetic leather palm. Great grip and all-day comfort on the trail."
    },
    {
        id: 17,
        name: "Endura Hummvee Lite Icon Gloves",
        category: "others",
        price: 32,
        img: "../assets/main/accessories/gloves-3.webp",
        description: "Full-finger MTB gloves in black with a perforated synthetic palm, touchscreen fingertips, and velcro wrist closure. Light and durable for trail use."
    },
    {
        id: 18,
        name: "Madison Isoler Thermal Gloves",
        category: "others",
        price: 34,
        img: "../assets/main/accessories/gloves-4.webp",
        description: "Warm rust/tan windproof full-finger gloves with a soft-shell outer and fleece lining. Touchscreen-compatible — ideal for autumn and winter rides."
    },
    {
        id: 19,
        name: "Compact Saddle Bag",
        category: "others",
        price: 18,
        img: "../assets/main/accessories/bag-1.webp",
        description: "Waterproof 0.5L saddle bag with velcro saddle rail attachment and zip closure. Just enough room for a tube, tyre levers, and a multi-tool."
    },
    {
        id: 20,
        name: "Ortlieb Seat-Pack 11L",
        category: "others",
        price: 95,
        img: "../assets/main/accessories/bag-2.webp",
        description: "Waterproof roll-top seat pack with Ortlieb's QLS quick-release mount and orange bungee compression straps. Built for bikepacking weekends."
    },
    {
        id: 21,
        name: "Ortlieb Seat-Pack 16L",
        category: "others",
        price: 110,
        img: "../assets/main/accessories/bag-3.webp",
        description: "Larger waterproof roll-top bikepacking seat bag with QLS mount and bungee straps. Extra volume for overnight or multi-day trail adventures."
    },
    {
        id: 22,
        name: "Sigma Curve Rear Light",
        category: "others",
        price: 22,
        img: "../assets/main/accessories/lights-2.webp",
        description: "USB rechargeable oval rear light with a bright red LED and multiple flash modes. Compact, IPX4 water resistant, with an easy tool-free clip mount."
    },
    {
        id: 23,
        name: "Infini Rack-Mount Rear Light",
        category: "others",
        price: 16,
        img: "../assets/main/accessories/lights-3.webp",
        description: "Wide-lens LED rear light mounts to a rack or seat stay. Battery powered with steady and flash modes — great for commuting in low light."
    },
    {
        id: 24,
        name: "Topeak Helmet Light Combo",
        category: "others",
        price: 28,
        img: "../assets/main/accessories/lights-4.webp",
        description: "Dual-function light clips to your helmet — white LED at the front, red LED at the rear. Battery powered with a rotating mount base for easy angle adjustment."
    },
    {
        id: 25,
        name: "Giro Rumble VR MTB Shoes",
        category: "others",
        price: 88,
        img: "../assets/main/accessories/shoes-1.webp",
        description: "Low-profile flat pedal shoe with a sticky Vibram Megagrip rubber sole and lace-up closure. Black with neon yellow accents — excellent grip on any flat pedal."
    },
    {
        id: 26,
        name: "Shimano RC1 Road Shoes",
        category: "others",
        price: 65,
        img: "../assets/main/accessories/shoes-2.webp",
        description: "Entry-level road shoe with a stiff nylon sole and three velcro strap closure. Compatible with SPD-SL and Look Delta cleats. Breathable and lightweight."
    },
    {
        id: 27,
        name: "Fox Union Flat Pedal Shoes — Black",
        category: "others",
        price: 92,
        img: "../assets/main/accessories/shoes-3.webp",
        description: "Lace-up flat pedal MTB shoe in all-black with perforated panels for breathability. Grippy rubber outsole and a reinforced toe box for technical trail use."
    },
    {
        id: 28,
        name: "Fox Union Flat Pedal Shoes — Grey",
        category: "others",
        price: 92,
        img: "../assets/main/accessories/shoes-4.webp",
        description: "Same lace-up construction as the black in a clean stealth grey. Perforated synthetic upper, grippy outsole, padded collar and tongue."
    },
    {
        id: 29,
        name: "Clear Cycling Water Bottle 750ml",
        category: "others",
        price: 10,
        img: "../assets/main/accessories/bottle-1.webp",
        description: "BPA-free squeezable 750ml bottle with a push-pull valve and wide mouth for easy filling and cleaning. Fits all standard bottle cage sizes."
    }
];
