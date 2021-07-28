import { ChainId, JSBI, Percent, Token, WETH } from '@uniswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected } from '../connectors'

export const ROUTER_ADDRESS = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'


// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MATIC, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MATIC, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USDC')
export const USDT = new Token(ChainId.MATIC, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MATIC, '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c', 18, 'COMP', 'Compound')
export const EASY = new Token(ChainId.MATIC, '0xDb3b3b147A030F032633f6C4BEBf9a2fB5a882B5', 18, 'EASY', 'EASY')
export const eUSDC = new Token(ChainId.MATIC, '0x4eBdE54ba404bE158262EDe801744b92b9878c61', 18, 'Easy USDC', 'eUSDC')
export const eUSDT = new Token(ChainId.MATIC, '0xfc39742Fe9420a7Af23757Fc7E78D1c3AE4A9474', 18, 'Easy USDT', 'eUSDT')
export const eDAI = new Token(ChainId.MATIC, '0xa1C09C8F4f5D03fcC27b456475d53d988e98D7C5', 18, 'Easy DAI', 'eDAI')
export const UNITOKEN = new Token(ChainId.MATIC, '0xb33EaAd8d922B1083446DC23f610c2567fB5180f', 18, 'Uniswap', 'UNI')
export const TT01 = new Token(ChainId.MATIC, '0x1DBb7f76CDC5413eE211ff4100723791B2d98c05', 18, 'TT01', 'Test Token 01')
export const TT02 = new Token(ChainId.MATIC, '0xd07B432B565AE10C6Dc0739989Ee3CF36A8dFf29', 18, 'TT02', 'Test Token 02')
export const ETHER = new Token(ChainId.MATIC, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 18, 'ETH', 'Ether')
export const QUICK = new Token(ChainId.MATIC, '0x831753DD7087CaC61aB5644b308642cc1c33Dc13', 18, 'Quickswap', 'QUICK')
// TODO this is only approximate, it's actually based on blocks
export const PROPOSAL_LENGTH_IN_DAYS = 7

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'//TODO: MATIC

const UNI_ADDRESS = '0xd64849351BB2EE882A7Af8f81be6265d0B306E4C'//Test WRX

export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MATIC]: new Token(ChainId.MATIC, UNI_ADDRESS, 8, 'WRX', 'Wazirx'),
  [ChainId.MUMBAI]: new Token(ChainId.MUMBAI, UNI_ADDRESS, 8, 'WRX', 'Wazirx')
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MATIC]: '0x4087F566796b46eEB01A38174c06E2f9924eAea8'//TODO: MATIC
}

const WETH_ONLY: ChainTokenList = {
  
  [ChainId.MUMBAI]: [WETH[ChainId.MUMBAI]],
  [ChainId.MATIC]: [WETH[ChainId.MATIC]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MATIC]: [...WETH_ONLY[ChainId.MATIC], DAI, USDC, USDT, COMP, QUICK, ETHER, UNITOKEN, EASY]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MATIC]: [...WETH_ONLY[ChainId.MATIC], DAI, USDC, USDT,  COMP, QUICK, ETHER, UNITOKEN, EASY]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MATIC]: [...WETH_ONLY[ChainId.MATIC], DAI, USDC, USDT,  COMP, QUICK, ETHER, UNITOKEN, EASY]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MATIC]: [
    
    [USDC, USDT],
    [USDC, DAI],
    [DAI, USDT],
    [ETHER, DAI],
    [ETHER, USDC],
    [UNITOKEN, eUSDC],
    [UNITOKEN, eUSDT],
    [UNITOKEN, eDAI],
    [EASY, USDC],
    [WETH[ChainId.MATIC], USDT],
    [WETH[ChainId.MATIC], USDC],
    [WETH[ChainId.MATIC], USDT],
    [WETH[ChainId.MATIC], DAI],
    [WETH[ChainId.MATIC], eDAI],
    [WETH[ChainId.MATIC], ETHER],
    [WETH[ChainId.MATIC], eUSDC],
    [ETHER, QUICK],
    [UNITOKEN, USDT],
    [QUICK, UNITOKEN]

  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  /**WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }*/
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'https://unpkg.com/quickswap-default-token-list@1.0.12/build/quickswap-default.tokenlist.json'
