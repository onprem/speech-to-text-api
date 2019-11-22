# Speech To Text

## API reference

- `POST` : `/pucho/stt`
  - Request:
    - using `curl`
      ```
      curl -X POST https://speech.prem.codes/pucho/stt \
      -H 'Content-Type: multipart/form-data' \
      -F 'file=@/home/prem/greet.wav'
      ```
    - using `httpie`
      ```
      http -f POST https://speech.prem.codes/pucho/stt file@~/greet.mp3
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