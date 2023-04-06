# Locale
The locale json files add support for multiple lenguages.

## Supported lenguages

### Current
- [ ] en_US
- [x] de_DE *

<sub>* hardcoded, not supported by locale json file</sub>

### Work in progress

- [ ] en_US
- [x] de_DE

## File Structure
Locale is stored as json files where opjects follow the data structure.
```
{
    "folder":[
        "file":[
            "item":{
                "name": "",
                "des": "",
                "option-add":{
                    "name": "Add",
                    "des": "Add subscription to channel."
                },
                "option-remove":{
                    "name": "Remove",
                    "des": "Remove subscription from channel."
                }
            }
        ]
    ],
    "folder":[
        "folder":[
            "file":[
                "item":{
                    "name": ""
                    "des": ""
                }
            ]
        ]
    ]
}
```