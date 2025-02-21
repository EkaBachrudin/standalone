import { FooterMenu, SocialContent } from "./Footer.type";

export const socialStaticContent: SocialContent = {
    title: 'Keep in touch with us',
    items: [
        {imageUrl: 'assets/icons/Facebook.svg', url: '#'},
        {imageUrl: 'assets/icons/Twitter.svg', url: '#'},
        {imageUrl: 'assets/icons/Youtube.svg', url: '#'},
        {imageUrl: 'assets/icons/Telegram.svg', url: '#'},
        {imageUrl: 'assets/icons/LinkedIn.svg', url: '#'},
        {imageUrl: 'assets/icons/Telegram.svg', url: '#'}
    ]
}

export const footerStaticData: FooterMenu[] = [
    {
        title: "Get connected",
        isOpen: false,
        items: [
            { name: "Prepaid", url: "/prepaid" },
            { name: "Halo postpaid", url: "/halo-postpaid" },
            { name: "Roaming", url: "/roaming" },
            { name: "Value-added services", url: "/value-added-services" },
            { name: "NSP", url: "/nsp" },
            { name: "Orbit WiFi", url: "/orbit-wifi" },
            { name: "Switch to 4G", url: "/switch-to-4g" },
            { name: "Migrate number", url: "/migrate-number" },
            { name: "Latest promos", url: "/latest-promos" }
        ]
    },
    {
        title: "Be entertained",
        isOpen: false,
        items: [
            { name: "MAXstream", url: "/maxstream" },
            { name: "Langit Musik", url: "/langit-musik" },
            { name: "Dunia Games", url: "/dunia-games" },
            { name: "Spotify", url: "/spotify" },
            { name: "Disney+", url: "/disney-plus" }
        ]
    },
    {
        title: "Pay easily",
        isOpen: false,
        items: [
            { name: "Top up credit", url: "/top-up-credit" },
            { name: "Transfer credit", url: "/transfer-credit" },
            { name: "Bill payment", url: "/bill-payment" },
            { name: "LinkAja", url: "/linkaja" },
            { name: "Mobile banking", url: "/mobile-banking" }
        ]
    },
    {
        title: "Get help",
        isOpen: false,
        items: [
            { name: "Support centre", url: "/support-centre" },
            { name: "Contact us", url: "/contact-us" },
            { name: "Internet issues", url: "/internet-issues" },
            { name: "Find a store", url: "/find-a-store" }
        ]
    },
    {
        title: "Enjoy rewards",
        isOpen: false,
        items: [
            { name: "POIN catalogue", url: "/poin-catalogue" },
            { name: "Mobile coupons", url: "/mobile-coupons" }
        ]
    },
    {
        title: "Get to know us",
        isOpen: false,
        items: [
            { name: "Profile", url: "/profile" },
            { name: "Our impact", url: "/our-impact" },
            { name: "Our innovations", url: "/our-innovations" },
            { name: "Investor relations", url: "/investor-relations" },
            { name: "Careers", url: "/careers" },
            { name: "News", url: "/news" }
        ]
    }
];