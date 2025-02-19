export interface MenuItem {
    name: string;
    url: string;
    childs?: ChildMenu[];
    isChildOpen?: boolean;
}

export interface ChildMenu {
    childName: string;
    url: string;
}