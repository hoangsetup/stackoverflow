import { model, Schema } from "mongoose";

interface UserCred {
  name: string;
  pwd: string;
}

interface User {
  id: string;
  name: string;
}

const testSchema = new Schema<UserCred>(
  {
    name: String,
    pwd: String,
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        return {
          id: doc._id.toString(),
          name: doc.name,
        };
      },
    },
  }
);
const Test = model<UserCred>("meow", testSchema);

async function addData(data: UserCred): Promise<User> {
  const returnedJson = (await new Test(data).save()).toJSON<User>();
  return returnedJson;
}