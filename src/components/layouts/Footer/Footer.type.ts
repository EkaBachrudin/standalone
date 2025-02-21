export interface SocialItem {
    imageUrl: string;
    url: string;
}

export interface SocialContent {
    title: string;
    items: SocialItem[];
}

export interface FooterMenuItem {
    name: string;
    url: string;
}

export interface FooterMenu {
    title: string;
    isOpen: boolean;
    items: FooterMenuItem[];
}

