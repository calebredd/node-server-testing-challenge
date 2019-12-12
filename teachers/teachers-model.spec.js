const Teachers = require("./teachers-model.js"),
  db = require("../data/dbConfig.js");

describe("First teacher test", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("teachers").truncate();
    });
    it("should add 2 new teacher subjects", async () => {
      await Teachers.insert({ subject: "Match" });
      await Teachers.insert({ subject: "Science" });

      const teachers = await db("teachers");
      expect(teachers).toHaveLength(2);
    });
    it("should return the new teacher subjects", async () => {
      let teacher = await Teachers.insert({ subject: "Calculus" });
      expect(teacher.subject).toBe("Calculus");

      teacher = await Teachers.insert({ subject: "Biology" });
      expect(teacher.subject).toBe("Biology");
    });
  });
});
