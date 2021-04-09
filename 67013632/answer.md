Just calculate on the Date object.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var today = new Date();

    var startDate = new Date();
    startDate.setDate(today.getDate() - 7);

    var endDate = new Date();
    endDate.setDate(today.getDate() + 7);

    console.log('TODAY', today.toISOString().split('T')[0]);
    console.log('START_DATE', startDate.toISOString().split('T')[0]);
    console.log('END_DATE', endDate.toISOString().split('T')[0]);

<!-- end snippet -->

