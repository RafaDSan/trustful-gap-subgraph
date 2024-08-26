import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { GrantDeleted } from "../generated/schema"
import { GrantDeleted as GrantDeletedEvent } from "../generated/GrantRegistry/GrantRegistry"
import { handleGrantDeleted } from "../src/grant-registry"
import { createGrantDeletedEvent } from "./grant-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let grantId = Bytes.fromI32(1234567890)
    let newGrantDeletedEvent = createGrantDeletedEvent(grantId)
    handleGrantDeleted(newGrantDeletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("GrantDeleted created and stored", () => {
    assert.entityCount("GrantDeleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "GrantDeleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "grantId",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
