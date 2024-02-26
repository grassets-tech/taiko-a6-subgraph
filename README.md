# Taiko Alpha 6 (Katla) testnet subgraph on Holesky

## Code build
```
npm install
npm install -g @graphprotocol/graph-cli
graph codegen && graph build
```

## Usage: Query

```
{
  blockL2S(first: 5) {
    id
    blockId
    blockTimestamp
    blockHash
  }
  accounts(first: 5) {
    id
    prover {
      id
    }
    proposer {
      id
    }
    contester {
      id
    }
  }
}
```
