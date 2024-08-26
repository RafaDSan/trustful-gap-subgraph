import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  GrantDeleted,
  GrantManagerChanged,
  GrantRegistered,
  GrantUpdated
} from "../generated/GrantRegistry/GrantRegistry"

export function createGrantDeletedEvent(grantId: Bytes): GrantDeleted {
  let grantDeletedEvent = changetype<GrantDeleted>(newMockEvent())

  grantDeletedEvent.parameters = new Array()

  grantDeletedEvent.parameters.push(
    new ethereum.EventParam("grantId", ethereum.Value.fromFixedBytes(grantId))
  )

  return grantDeletedEvent
}

export function createGrantManagerChangedEvent(
  grantId: Bytes,
  oldManager: Address,
  newManager: Address
): GrantManagerChanged {
  let grantManagerChangedEvent = changetype<GrantManagerChanged>(newMockEvent())

  grantManagerChangedEvent.parameters = new Array()

  grantManagerChangedEvent.parameters.push(
    new ethereum.EventParam("grantId", ethereum.Value.fromFixedBytes(grantId))
  )
  grantManagerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldManager",
      ethereum.Value.fromAddress(oldManager)
    )
  )
  grantManagerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newManager",
      ethereum.Value.fromAddress(newManager)
    )
  )

  return grantManagerChangedEvent
}

export function createGrantRegisteredEvent(
  grantId: Bytes,
  id: Bytes,
  grantee: Address,
  grantProgramLabel: string,
  manager: Address
): GrantRegistered {
  let grantRegisteredEvent = changetype<GrantRegistered>(newMockEvent())

  grantRegisteredEvent.parameters = new Array()

  grantRegisteredEvent.parameters.push(
    new ethereum.EventParam("grantId", ethereum.Value.fromFixedBytes(grantId))
  )
  grantRegisteredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  grantRegisteredEvent.parameters.push(
    new ethereum.EventParam("grantee", ethereum.Value.fromAddress(grantee))
  )
  grantRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "grantProgramLabel",
      ethereum.Value.fromString(grantProgramLabel)
    )
  )
  grantRegisteredEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return grantRegisteredEvent
}

export function createGrantUpdatedEvent(
  grantId: Bytes,
  id: Bytes,
  grantProgramLabel: string,
  status: i32
): GrantUpdated {
  let grantUpdatedEvent = changetype<GrantUpdated>(newMockEvent())

  grantUpdatedEvent.parameters = new Array()

  grantUpdatedEvent.parameters.push(
    new ethereum.EventParam("grantId", ethereum.Value.fromFixedBytes(grantId))
  )
  grantUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  grantUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "grantProgramLabel",
      ethereum.Value.fromString(grantProgramLabel)
    )
  )
  grantUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return grantUpdatedEvent
}
