const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'steexp.com' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'stellar-explorer.4d63.com' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType}
