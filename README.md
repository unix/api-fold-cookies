## Example for Edge Function

This is an example for demonstrating [discussions#7375](https://github.com/vercel/vercel/discussions/7375).

## Description

In Edge Function of Vercel, the headers are collapsed, which may cause browsers to be incompatible with multiple `set-cookie`.

- Run `curl --head https://api-fold-cookies.vercel.app`
- Open [demo](https://api-fold-cookies.vercel.app) and view 'Developer Console -> Application -> Storage -> Cookies'

## Refs

- [RFC 2109](https://www.rfc-editor.org/rfc/rfc2109#section-4.2.2)
- [RFC 6265](https://www.rfc-editor.org/rfc/rfc6265#section-4.2.1)
- [em-http-request#82](https://github.com/igrigorik/em-http-request/issues/82)
