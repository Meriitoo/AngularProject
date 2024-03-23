// import { Theme } from "./theme";
// import { User } from "./user";

import { ourUser } from "./ourUser";
import { Theme } from "./theme";


// export interface Post {
//     likes: string[];
//     _id: string;
//     text: string;
//     userId: User;
//     themeId: Theme;
//     created_at: string;
//     updatedAt: string;
//     __v: number,

// }

export interface Post {
    postText: string,
    _id: string;
    text: string;
    userId: ourUser | undefined;
    themeId: Theme | undefined;
    created_at: string;
    updatedAt: string;
    __v: number;
}