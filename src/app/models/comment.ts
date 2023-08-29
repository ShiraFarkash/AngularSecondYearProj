import { User } from "./user";

export class Comment {
    commentId: number | undefined;
    user: User | undefined;
    commentDate: Date | undefined;
    theComment: string | undefined;

}