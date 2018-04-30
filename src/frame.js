export function getNewFrame({sessionId, sharedKey}) {
  let container = document.createElement('iframe')
  container.setAttribute(
    'src',
    `https://walletconnect-embed.surge.sh/embed/session/?sessionId=${sessionId}&sharedKey=${sharedKey}`
  )
  container.setAttribute('allowtransparency', true)
  container.setAttribute(
    'style',
    `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: 999999;
  `
  )
  return container
}
