'use strict';


function writeBatch(myBatch){
  
  const fs = require('fs');

  const content = 'Some content!';
  console.log('Received data to save ...');
  console.log(myBatch);

  try {
    fs.writeFileSync('./batches/'+myBatch.batch.id+'.json', JSON.stringify(myBatch, null, 2));
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

function readBatch(batchID){
  const fs = require('fs');

  try {
    console.log('Time to read data from batch: '+batchID);
    const data = fs.readFileSync('./batches/'+batchID+'.json', 'utf8');
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }

}

function getDummyNFT(myBatch){
  return {
    "batch" : myBatch,
    "token" : {
      "tokenId" : "95480287202481612807256758977535383554754127204487213222243062926750196432897",
      "blockchain" : "polygon",
      "transactionHash" : "0x24f306b33f4c77ec9a71fd45b525c07909278e9515129fc3545ad443995ca922",
      "network" : "Mumbai-Testnet",
      "tokenSmartContractAddress" : "0xeea59420633c707e9a0f98850a774c0d4e777ae3"
    }
  }; 
}
function getDummyBatch(){
  return {
    "batch" : {
      "files" : [ {
        "name" : "salmonella_report.pdf",
        "hash" : "e0d123e5f316bef78bfdf5a008837577"
      }, {
        "name" : "name",
        "hash" : "35d91262b3c3ec8841b54169588c97f7"
      } ],
      "links" : [ {
        "name" : "chainpoint",
        "url" : "https://www.chainpoint.com/batch/123"
      }, {
        "name" : "gourmet",
        "url" : "https://gourmet.nl/batch/123"
      } ],
      "id" : 0,
      "fields" : [ {
        "name" : "expirationDate",
        "hash" : "cc273fe9d442850fa18c31c88c823e07"
      }, {
        "name" : "harvestDate",
        "hash" : "ff6626c69507a6f511cc398998905670"
      } ]
    },
    "token" : {
      "tokenId" : "95480287202481612807256758977535383554754127204487213222243062926750196432897",
      "blockchain" : "polygon",
      "transactionHash" : "0x24f306b33f4c77ec9a71fd45b525c07909278e9515129fc3545ad443995ca922",
      "network" : "Mumbai-Testnet",
      "tokenSmartContractAddress" : "0xeea59420633c707e9a0f98850a774c0d4e777ae3"
    }
  };
}
/**
 * Add a new batch onto the BC (mint a nft)
 * Add a new batch onto the BC (mint a nft)
 *
 * body Batch Create a new batch NFT
 * returns Nft
 **/
exports.addBatch = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    var examples = {};
    examples['application/json'] = getDummyNFT(body);

    if (Object.keys(examples).length > 0) {
      writeBatch(examples['application/json']);
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new batch onto the BC (mint a nft)
 * Add a new batch onto the BC (mint a nft)
 *
 * body Batch Create a new batch NFT
 * returns Nft
 **/
/*
exports.addBatch = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "batch" : {
    "files" : [ {
      "name" : "name",
      "hash" : "hash"
    }, {
      "name" : "name",
      "hash" : "hash"
    } ],
    "links" : [ {
      "name" : "name",
      "url" : "url"
    }, {
      "name" : "name",
      "url" : "url"
    } ],
    "id" : 0,
    "fields" : [ {
      "name" : "name",
      "hash" : "hash"
    }, {
      "name" : "name",
      "hash" : "hash"
    } ]
  },
  "token" : {
    "tokenId" : "tokenId",
    "blockchain" : "polygon",
    "transactionHash" : "transactionHash",
    "network" : "Mumbai-Testnet",
    "tokenSmartContractAddress" : "tokenSmartContractAddress"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

*/

/**
 * Find batch by ID
 * Returns a single batch Nft
 *
 * batchId Long ID of batch to return
 * returns Nft
 **/
exports.getBatchById = function(batchId) {
  return new Promise(function(resolve, reject) {
    var data= readBatch(batchId);

    var examples = {};

    if (data!=null){

      examples['application/json'] = JSON.parse(data);
  
    }
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

