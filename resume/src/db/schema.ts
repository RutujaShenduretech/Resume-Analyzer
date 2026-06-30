import {
  pgTable,
  serial,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),

  fullName: varchar("full_name", { length: 255 }),

  email: varchar("email", { length: 255 }),

  phone: varchar("phone", { length: 20 }),

  summary: text("summary"),

  skills: text("skills"),

  education: text("education"),

  experience: text("experience"),
});