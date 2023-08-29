import { Comment } from "./comment";
import { User } from "./user";

export class Answer {
    answerId: number | undefined;
    user: User | undefined;
    theAnswer: string | undefined;
    answerDate: Date | undefined;
    votes: number | undefined;
    isApproved: boolean | undefined;
    allComments = new Array<Comment>();
}