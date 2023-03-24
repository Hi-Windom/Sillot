import { genUUID } from "../../src/util/genID";

test("test genUUID", () => {
  expect(genUUID()).toMatch(
    /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/g
  );
});
