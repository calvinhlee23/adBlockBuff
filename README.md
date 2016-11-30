
![logo]
[logo]: ./image/logo.png
# AdBlockBuff

adblockBuff is a customizable Google Chrome extension that block online advertisements.

## API

- Uses Chrome extension APIs including `background`, `webRequest`, and `webRequestBlocking`.
- Constantly listens to webrequests made by the browser, and intercepts the requests once recognized as an advertisement.
- Can be easily customized by accessing `block.js` and `manifes.json`.
