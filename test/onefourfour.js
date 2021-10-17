const Utility144NFT = artifacts.require('../contracts/Utility144NFT.sol')
const onefourfour = artifacts.require('../contracts/ONEFOURFOURNFT.sol')


require('chai')
  .use(require('chai-as-promised'))
  .should()

function toWei(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('Utility144NFT', ([owner, investor]) => {

  before(async () => {
    nft = await onefourfour.deployed();
    util = await Utility144NFT.deployed(nft.address);
  })

  describe('deployment', async() => {
    it('deploys successfully', async() => { 
      const address = nft.address
      assert.notEqual("", address);
      assert.notEqual(0x0, address);
      assert.notEqual(null, address);
      assert.notEqual(undefined, address);
      console.log(address);
    })
    it('has a name', async() => {
      const name = await nft.name()
      assert.equal(name, '144NFT')
    })
    it('has a symbol', async() => {
      const name = await nft.symbol()
      assert.equal(name, '144')
    })

    it('can be minted', async() => {
      const minted = await nft.mint144NFT(
        investor,
        'ipfs://QmRExCy45DRiDrzXRSCPa2cemZc1APpX8jvRZAejiayUqK',
        1)
        console.log(minted)
    })

    it('increases count when mint', async() => {
      const count = await nft.numMinted();
      assert.equal(1, count)
    })

    it('has increased balance of investor', async() =>{
      const balance = await nft.balanceOf(investor);
      assert.equal(1, balance)
    })
    
    it ('has correct token uri', async() =>{
      const uri = await nft.tokenURI(1);
      assert.equal('ipfs://QmRExCy45DRiDrzXRSCPa2cemZc1APpX8jvRZAejiayUqK', uri);
    })

    it ('can set any token id', async() => {
      await nft.mint144NFT(investor,
        'ipfs://H1j9cDL1lp591CKgm40Kfl',
        46)
      const adrs = await nft.ownerOf(46);
      assert.equal(investor, adrs)
    })

    it('can be bought using utility', async() =>{
      const buy = await util.buyGrid(
        investor,
        'ipfs://QmRExCy45H1j9cDL1lp591CKgm40KflZAejiayUqK',
        25,
        {value:60000000000000000})
      console.log(buy)
    })

    it('it was actually minted with utility buy', async() => {
      const balance = await nft.balanceOf(investor);
      const count = await nft.numMinted();
      assert.equal(3, balance) 
      assert.equal(3, count)
    })

    it('can get correct uri', async() => {
      const uri = await util.getUri(25)
      assert.equal(uri, 'ipfs://QmRExCy45H1j9cDL1lp591CKgm40KflZAejiayUqK')
    })

    it('has correct contract balance', async() => {
      const balance = await util.getBalance()
      assert.equal(60000000000000000, balance)
    })

    it('funds can be withdrawn from util', async() => {
      const withdraw = await util.withdrawFunds({
        from: owner
      })
      console.log(withdraw)
    })
  })
})
