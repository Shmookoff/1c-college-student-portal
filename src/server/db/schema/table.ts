import { pgTableCreator } from "drizzle-orm/pg-core";

const table = pgTableCreator((name) => `1c-college-student-portal_${name}`);

export default table;
