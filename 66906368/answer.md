Just imagine that the callback function is a normal parameter. Then, define `WriterInstance` as a normal object - Just define it's properties


```ts
interface Writer{
  readData : (fileLocation: string, callback: () => void) => void;
  generateData: (fileLocation: string, callback: (error: Error, data?: any) => void) => void;
}

const WriterInstance: Writer = {
  readData: (fileLocation: string, callback: () => void) => {
    // dome something with fileLocation
    callback();
  },

  generateData: (fileLocation: string, callback: (error: Error, data?: any) => void) => {
    // dome something with fileLocation
    callback(null, true);
  }
}

// usage of WriterInstance
WriterInstance.generateData('C:/workspace/file1.text', (error, data) => {
  if (error) {
    console.log('work is not done');
    return console.log(error);
  }
  console.log('work is done');
});
```
