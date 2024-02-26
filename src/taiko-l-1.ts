import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  BlobCached as BlobCachedEvent,
  BlockProposed as BlockProposedEvent,
  BlockVerified as BlockVerifiedEvent,
  BlockVerified1 as BlockVerified1Event,
  CrossChainSynced as CrossChainSyncedEvent,
  CrossChainSynced1 as CrossChainSynced1Event,
  EthDeposited as EthDepositedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  ProvingPaused as ProvingPausedEvent,
  TokenCredited as TokenCreditedEvent,
  TokenDebited as TokenDebitedEvent,
  TokenDeposited as TokenDepositedEvent,
  TokenWithdrawn as TokenWithdrawnEvent,
  TransitionContested as TransitionContestedEvent,
  TransitionProved as TransitionProvedEvent,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent
} from "../generated/TaikoL1/TaikoL1"
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
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlobCached(event: BlobCachedEvent): void {
  let entity = new BlobCached(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blobHash = event.params.blobHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockProposed(event: BlockProposedEvent): void {
  let entity = new BlockProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.assignedProver = event.params.assignedProver
  entity.livenessBond = event.params.livenessBond
  entity.meta_l1Hash = event.params.meta.l1Hash
  entity.meta_difficulty = event.params.meta.difficulty
  entity.meta_blobHash = event.params.meta.blobHash
  entity.meta_extraData = event.params.meta.extraData
  entity.meta_depositsHash = event.params.meta.depositsHash
  entity.meta_coinbase = event.params.meta.coinbase
  entity.meta_id = event.params.meta.id
  entity.meta_gasLimit = event.params.meta.gasLimit
  entity.meta_timestamp = event.params.meta.timestamp
  entity.meta_l1Height = event.params.meta.l1Height
  entity.meta_txListByteOffset = event.params.meta.txListByteOffset
  entity.meta_txListByteSize = event.params.meta.txListByteSize
  entity.meta_minTier = event.params.meta.minTier
  entity.meta_blobUsed = event.params.meta.blobUsed
  entity.meta_parentMetaHash = event.params.meta.parentMetaHash
  // entity.depositsProcessed = event.params.depositsProcessed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockVerified(event: BlockVerifiedEvent): void {
  let entity = new BlockVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.assignedProver = event.params.assignedProver
  entity.prover = event.params.prover
  entity.blockHash = event.params.blockHash
  entity.signalRoot = event.params.signalRoot
  entity.tier = event.params.tier
  entity.contestations = event.params.contestations

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCrossChainSynced(event: CrossChainSyncedEvent): void {
  let entity = new CrossChainSynced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.syncedInBlock = event.params.syncedInBlock
  entity.blockId = event.params.blockId
  entity.blockHash = event.params.blockHash
  entity.signalRoot = event.params.signalRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEthDeposited(event: EthDepositedEvent): void {
  let entity = new EthDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.deposit_recipient = event.params.deposit.recipient
  entity.deposit_amount = event.params.deposit.amount
  entity.deposit_id = event.params.deposit.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvingPaused(event: ProvingPausedEvent): void {
  let entity = new ProvingPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenCredited(event: TokenCreditedEvent): void {
  let entity = new TokenCredited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenDebited(event: TokenDebitedEvent): void {
  let entity = new TokenDebited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenDeposited(event: TokenDepositedEvent): void {
  let entity = new TokenDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenWithdrawn(event: TokenWithdrawnEvent): void {
  let entity = new TokenWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionContested(
  event: TransitionContestedEvent
): void {
  let entity = new TransitionContested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_signalRoot = event.params.tran.signalRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.contester = event.params.contester
  entity.contestBond = event.params.contestBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionProved(event: TransitionProvedEvent): void {
  let entity = new TransitionProved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_signalRoot = event.params.tran.signalRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.prover = event.params.prover
  entity.validityBond = event.params.validityBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
