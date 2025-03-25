import { RESTCollectionStatusOptions } from "./enums";

export type RESTCollections = RESTCollection[];

export type RESTCollection = {
    id: string;
    user: string;
    name: string;
    description: string;
    icon_url: string | null;
    color: number | null;
    status: RESTCollectionStatusOptions;
    created: Date;
    updated: Date;
    projects: string[];
};