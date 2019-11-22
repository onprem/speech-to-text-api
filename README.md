# Speech To Text

## API reference

- `POST` : `/pucho/stt`
  - Fields:
    - `lang`: language for transcription. Possible values are `english`, `hindi` and `english-us`. Default is `hindi`.

  - Request Example:
    - using `curl`
      ```
      curl -X POST https://speech.prem.codes/pucho/stt \
      -H 'Content-Type: multipart/form-data' \
      -F 'file=@/home/prem/greet.wav' \
      -F 'lang=english-us'
      ```
    - using `httpie`
      ```
      http -f POST https://speech.prem.codes/pucho/stt lang='english-us' file@~/greet.mp3
      ```

  - Response:
    ```
    {
        "data": {
            "output": "greetings this is James thank you for testing my voice"
        },
        "status": "REQUEST_SUCCESSFULL",
        "statusCode": 200
    }
    ```