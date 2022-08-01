import React from "react";
import nftImg from "../assets/img/nft.png";
export const MainNFT = () => {
  return (
    <div className="nftMain">
      <div className="common_width">
        <div className="presentation">
          <h1>What are NFTs?</h1>
          <h2>non-fungible token</h2>
          <p>
            <b>NFTs</b> can really be anything digital (such as drawings, music,
            your brain downloaded and turned into an AI), but a lot of the
            current ...
          </p>
          <p>
            <b> A non-fungible token</b> is a financial security consisting of
            digital data stored in a blockchain, a form of distributed ledger.
            The ownership of an NFT is recorded in the blockchain, and can be
            transferred by the owner, allowing NFTs to be sold and traded.
          </p>
        </div>
        <img src={nftImg} alt="" />
      </div>
    </div>
  );
};
