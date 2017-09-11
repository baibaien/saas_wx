import 'es6-promise'
import 'whatwg-fetch'

export function getHttpData(url) {
    const RESULT = fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9hcGkuc2Fhcy5tYXlpaHIuY29tL3VzZXIvdXNlcnMvYXV0aGVudGljYXRlIiwiaWF0IjoxNTAwMTE0NDczLCJleHAiOjE1MTIyMTA0NzMsIm5iZiI6MTUwMDExNDQ3MywianRpIjoiSVoyelVYVTR2WkJSYW5BdSJ9.NQWfif1b53drSWy1ryFsEK_I8l57TDdYH-GAgHXh5rU'
        }
    });
    return RESULT;
}