var Provider = window['web3-provider']

function getLoginTypedData(address) {
  return [
    {
      type: 'string',
      name: 'App',
      value: 'matic:wallet'
    },
    {
      type: 'string',
      name: 'Reason',
      value: 'login'
    },
    {
      type: 'address',
      name: 'Address',
      value: address
    }
  ]
}

var web3 = new Web3(
  new Provider({
    host: 'https://kovan.infura.io'
  })
)

web3.eth
  .getAccounts()
  .then(data => {
    console.log(data)
    var account = data
    var params = [account, getLoginTypedData(account)]
    var method = 'eth_signTypedData'
    return new Promise((resolve, reject) => {
      web3.currentProvider.sendAsync(
        {
          method: method,
          params: params,
          address: account
        },
        (err, result) => {
          var e = err || (result && result.error)
          if (e) {
            reject(e)
          } else {
            resolve(result)
          }
        }
      )
    })
  })
  .then(result => {
    console.log(result)
  })
  .catch(e => {
    console.log('Wallet connect error', e)
  })
