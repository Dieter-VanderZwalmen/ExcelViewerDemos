import { createApp } from 'vue'
import App from './App.vue'

import { registerLicense } from '@syncfusion/ej2-base';

let key = "Mgo+DSMBaFt+QHFqVkFrWU5HaV1CX2BZeVlyRWlcek4BCV5EYF5SRHJfQV1qSXZWf0xgWXw=;Mgo+DSMBPh8sVXJ1S0d+X1ZPc0BBQmFJfFBmQmldf1R1cUU3HVdTRHRcQlljSn5adkxjWX9ceXA=;ORg4AjUWIQA/Gnt2VFhhQlJDfVpdXnxLflF1VWRTe156cVBWESFaRnZdQV1nSX1Tf0VqWX9fcnxR;MTU5NjUxM0AzMjMxMmUzMTJlMzMzN1N0eTN4OWRJOHdZRTcyUnh4WGZvTmlUMEg2NWRHd1Mxc1MwNnE3QmNBcHc9;MTU5NjUxNEAzMjMxMmUzMTJlMzMzN1d3ajk5U0h2bUZ6WlJacWNaZ0NhU1hXakFLc1FqbmxKRzBsRUc3VmUwL3c9;NRAiBiAaIQQuGjN/V0d+XU9HcVRHQmBWfFN0RnNedVpwflBDcC0sT3RfQF5jTX5QdkxjUH9ed3xRQw==;MTU5NjUxNkAzMjMxMmUzMTJlMzMzN0QzL1F4Z2hOcVhUNFRMaDZHMWRCbGhsUXZnZURYc2dFb3dhSUsrQ3l3cEE9;MTU5NjUxN0AzMjMxMmUzMTJlMzMzN2ZvenZzQ3ZteHhMU3VFOHFZRXdadGI0OXVKdVBQVmVCY3h6Sm1zWFQ2Wms9;Mgo+DSMBMAY9C3t2VFhhQlJDfVpdXnxLflF1VWRTe156cVBWESFaRnZdQV1nSX1Tf0VqWX5dd3JX;MTU5NjUxOUAzMjMxMmUzMTJlMzMzN0NqdE5obXI1WXIyYjNhWThBZzlnMkNnbk5IalpmVFhNNzZDaUt0YWQ5MzA9;MTU5NjUyMEAzMjMxMmUzMTJlMzMzN2RtL0ZVM2dRSUZJRDFPb2tDZkdDVmhaaHhrQkpvQ1gweEp4T1ZFQkZ4QUk9;MTU5NjUyMUAzMjMxMmUzMTJlMzMzN0QzL1F4Z2hOcVhUNFRMaDZHMWRCbGhsUXZnZURYc2dFb3dhSUsrQ3l3cEE9 "
registerLicense(key);
let app = createApp(App);
app.mount("#app");



// let app = createApp(SpreadJS);
// app.mount("#app");

  