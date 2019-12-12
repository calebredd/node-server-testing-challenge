const Students = require("./students-model.js"),
  db = require("../data/dbConfig.js");

describe("First student test", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("students").truncate();
    });
    it("should add 2 new students", async () => {
      await Students.insert({ name: "Jerry" });
      await Students.insert({ name: "Samantha" });

      const students = await db("students");
      expect(students).toHaveLength(2);
    });
    it("should return the new student", async () => {
      let student = await Students.insert({ name: "Dan" });
      expect(student.name).toBe("Dan");

      student = await Students.insert({ name: "Rachel" });
      expect(student.name).toBe("Rachel");
    });
  });
});
