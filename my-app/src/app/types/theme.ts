import { ourUser } from "./ourUser";
import { Post } from "./post";


export interface Theme {
    area: string,
    subscribers: string[];
    posts: any; //string[] | Post[];
    _id: string;
    themeName: string;
    userId: ourUser;
    created_at: string[];
    updatedAt: string[];
    __v: number;

}
