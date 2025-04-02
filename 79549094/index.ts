import { createClient, EntrySkeletonType, EntryFieldTypes } from "contentful";

const client = createClient({
    space: 'space',
    accessToken: 'accessToken',
});

export interface QuestionAndAnswerFields {
    key: EntryFieldTypes.Symbol;
    order: EntryFieldTypes.Symbol;
}

export type QuestionAndAnswerSkeleton = EntrySkeletonType<QuestionAndAnswerFields, "questionAndAnswer">;

(async () => {
    const response = await client.getEntries<QuestionAndAnswerSkeleton>({
        content_type: "questionAndAnswer",
        "fields.key[match]": `string value`
    });
})()
