import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  BlobCached,
  BlockProposed,
  BlockVerified,
  BlockVerified1,
  CrossChainSynced,
  CrossChainSynced1,
  EthDeposited,
  Initialized,
  OwnershipTransferred,
  Paused,
  ProvingPaused,
  TokenCredited,
  TokenDebited,
  TokenDeposited,
  TokenWithdrawn,
  TransitionContested,
  TransitionProved,
  Unpaused,
  Upgraded
} from "../generated/TaikoL1/TaikoL1"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createBlobCachedEvent(blobHash: Bytes): BlobCached {
  let blobCachedEvent = changetype<BlobCached>(newMockEvent())

  blobCachedEvent.parameters = new Array()

  blobCachedEvent.parameters.push(
    new ethereum.EventParam("blobHash", ethereum.Value.fromFixedBytes(blobHash))
  )

  return blobCachedEvent
}

export function createBlockProposedEvent(
  blockId: BigInt,
  assignedProver: Address,
  livenessBond: BigInt,
  meta: ethereum.Tuple,
  depositsProcessed: Array<ethereum.Tuple>
): BlockProposed {
  let blockProposedEvent = changetype<BlockProposed>(newMockEvent())

  blockProposedEvent.parameters = new Array()

  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "assignedProver",
      ethereum.Value.fromAddress(assignedProver)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "livenessBond",
      ethereum.Value.fromUnsignedBigInt(livenessBond)
    )
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam("meta", ethereum.Value.fromTuple(meta))
  )
  blockProposedEvent.parameters.push(
    new ethereum.EventParam(
      "depositsProcessed",
      ethereum.Value.fromTupleArray(depositsProcessed)
    )
  )

  return blockProposedEvent
}

export function createBlockVerifiedEvent(
  blockId: BigInt,
  assignedProver: Address,
  prover: Address,
  blockHash: Bytes,
  signalRoot: Bytes,
  tier: i32,
  contestations: i32
): BlockVerified {
  let blockVerifiedEvent = changetype<BlockVerified>(newMockEvent())

  blockVerifiedEvent.parameters = new Array()

  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "assignedProver",
      ethereum.Value.fromAddress(assignedProver)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "signalRoot",
      ethereum.Value.fromFixedBytes(signalRoot)
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )
  blockVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "contestations",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(contestations))
    )
  )

  return blockVerifiedEvent
}

export function createBlockVerified1Event(
  blockId: BigInt,
  assignedProver: Address,
  prover: Address,
  blockHash: Bytes,
  signalRoot: Bytes,
  tier: i32,
  contestations: i32
): BlockVerified1 {
  let blockVerified1Event = changetype<BlockVerified1>(newMockEvent())

  blockVerified1Event.parameters = new Array()

  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "assignedProver",
      ethereum.Value.fromAddress(assignedProver)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "signalRoot",
      ethereum.Value.fromFixedBytes(signalRoot)
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )
  blockVerified1Event.parameters.push(
    new ethereum.EventParam(
      "contestations",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(contestations))
    )
  )

  return blockVerified1Event
}

export function createCrossChainSyncedEvent(
  syncedInBlock: BigInt,
  blockId: BigInt,
  blockHash: Bytes,
  signalRoot: Bytes
): CrossChainSynced {
  let crossChainSyncedEvent = changetype<CrossChainSynced>(newMockEvent())

  crossChainSyncedEvent.parameters = new Array()

  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "syncedInBlock",
      ethereum.Value.fromUnsignedBigInt(syncedInBlock)
    )
  )
  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  crossChainSyncedEvent.parameters.push(
    new ethereum.EventParam(
      "signalRoot",
      ethereum.Value.fromFixedBytes(signalRoot)
    )
  )

  return crossChainSyncedEvent
}

export function createCrossChainSynced1Event(
  syncedInBlock: BigInt,
  blockId: BigInt,
  blockHash: Bytes,
  signalRoot: Bytes
): CrossChainSynced1 {
  let crossChainSynced1Event = changetype<CrossChainSynced1>(newMockEvent())

  crossChainSynced1Event.parameters = new Array()

  crossChainSynced1Event.parameters.push(
    new ethereum.EventParam(
      "syncedInBlock",
      ethereum.Value.fromUnsignedBigInt(syncedInBlock)
    )
  )
  crossChainSynced1Event.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  crossChainSynced1Event.parameters.push(
    new ethereum.EventParam(
      "blockHash",
      ethereum.Value.fromFixedBytes(blockHash)
    )
  )
  crossChainSynced1Event.parameters.push(
    new ethereum.EventParam(
      "signalRoot",
      ethereum.Value.fromFixedBytes(signalRoot)
    )
  )

  return crossChainSynced1Event
}

export function createEthDepositedEvent(deposit: ethereum.Tuple): EthDeposited {
  let ethDepositedEvent = changetype<EthDeposited>(newMockEvent())

  ethDepositedEvent.parameters = new Array()

  ethDepositedEvent.parameters.push(
    new ethereum.EventParam("deposit", ethereum.Value.fromTuple(deposit))
  )

  return ethDepositedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createProvingPausedEvent(paused: boolean): ProvingPaused {
  let provingPausedEvent = changetype<ProvingPaused>(newMockEvent())

  provingPausedEvent.parameters = new Array()

  provingPausedEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused))
  )

  return provingPausedEvent
}

export function createTokenCreditedEvent(
  to: Address,
  amount: BigInt
): TokenCredited {
  let tokenCreditedEvent = changetype<TokenCredited>(newMockEvent())

  tokenCreditedEvent.parameters = new Array()

  tokenCreditedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tokenCreditedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenCreditedEvent
}

export function createTokenDebitedEvent(
  from: Address,
  amount: BigInt
): TokenDebited {
  let tokenDebitedEvent = changetype<TokenDebited>(newMockEvent())

  tokenDebitedEvent.parameters = new Array()

  tokenDebitedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  tokenDebitedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenDebitedEvent
}

export function createTokenDepositedEvent(amount: BigInt): TokenDeposited {
  let tokenDepositedEvent = changetype<TokenDeposited>(newMockEvent())

  tokenDepositedEvent.parameters = new Array()

  tokenDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenDepositedEvent
}

export function createTokenWithdrawnEvent(amount: BigInt): TokenWithdrawn {
  let tokenWithdrawnEvent = changetype<TokenWithdrawn>(newMockEvent())

  tokenWithdrawnEvent.parameters = new Array()

  tokenWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenWithdrawnEvent
}

export function createTransitionContestedEvent(
  blockId: BigInt,
  tran: ethereum.Tuple,
  contester: Address,
  contestBond: BigInt,
  tier: i32
): TransitionContested {
  let transitionContestedEvent = changetype<TransitionContested>(newMockEvent())

  transitionContestedEvent.parameters = new Array()

  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam("contester", ethereum.Value.fromAddress(contester))
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "contestBond",
      ethereum.Value.fromUnsignedBigInt(contestBond)
    )
  )
  transitionContestedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionContestedEvent
}

export function createTransitionProvedEvent(
  blockId: BigInt,
  tran: ethereum.Tuple,
  prover: Address,
  validityBond: BigInt,
  tier: i32
): TransitionProved {
  let transitionProvedEvent = changetype<TransitionProved>(newMockEvent())

  transitionProvedEvent.parameters = new Array()

  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "blockId",
      ethereum.Value.fromUnsignedBigInt(blockId)
    )
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam("tran", ethereum.Value.fromTuple(tran))
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam("prover", ethereum.Value.fromAddress(prover))
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "validityBond",
      ethereum.Value.fromUnsignedBigInt(validityBond)
    )
  )
  transitionProvedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return transitionProvedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
