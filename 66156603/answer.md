Currently, You cannot delete all the items just by passing the Hash key, to delete an item it requires Hash + Range because that's what makes it unique.

Here is the reference link from DynamoDB documentation http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#API_DeleteItem_RequestSyntax

> For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
