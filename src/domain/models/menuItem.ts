export interface MenuItem {
    name: string;
    childs?: ChildMenu[];
    isChildOpen?: boolean;
}

export interface ChildMenu {
    childName: string;
    url: string;
}