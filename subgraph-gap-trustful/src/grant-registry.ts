import {
  GrantDeleted as GrantDeletedEvent,
  GrantManagerChanged as GrantManagerChangedEvent,
  GrantRegistered as GrantRegisteredEvent,
  GrantUpdated as GrantUpdatedEvent
} from "../generated/GrantRegistry/GrantRegistry"
import {
  GrantDeleted,
  GrantManagerChanged,
  GrantRegistered,
  GrantUpdated
} from "../generated/schema"

export function handleGrantDeleted(event: GrantDeletedEvent): void {
  let entity = new GrantDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.grantId = event.params.grantId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGrantManagerChanged(
  event: GrantManagerChangedEvent
): void {
  let entity = new GrantManagerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.grantId = event.params.grantId
  entity.oldManager = event.params.oldManager
  entity.newManager = event.params.newManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGrantRegistered(event: GrantRegisteredEvent): void {
  let entity = new GrantRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.grantId = event.params.grantId
  entity.GrantRegistry_id = event.params.id
  entity.grantee = event.params.grantee
  entity.grantProgramLabel = event.params.grantProgramLabel
  entity.manager = event.params.manager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGrantUpdated(event: GrantUpdatedEvent): void {
  let entity = new GrantUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.grantId = event.params.grantId
  entity.GrantRegistry_id = event.params.id
  entity.grantProgramLabel = event.params.grantProgramLabel
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
